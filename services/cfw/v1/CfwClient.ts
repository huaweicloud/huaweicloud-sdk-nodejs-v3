import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddAddressItemsInfoDto } from './model/AddAddressItemsInfoDto';
import { AddAddressItemsInfoDtoAddressItems } from './model/AddAddressItemsInfoDtoAddressItems';
import { AddAddressItemsUsingPostRequest } from './model/AddAddressItemsUsingPostRequest';
import { AddAddressItemsUsingPostResponse } from './model/AddAddressItemsUsingPostResponse';
import { AddAddressSetDto } from './model/AddAddressSetDto';
import { AddAddressSetInfoUsingPostRequest } from './model/AddAddressSetInfoUsingPostRequest';
import { AddAddressSetInfoUsingPostResponse } from './model/AddAddressSetInfoUsingPostResponse';
import { AddBlackWhiteListDto } from './model/AddBlackWhiteListDto';
import { AddBlackWhiteListUsingPostRequest } from './model/AddBlackWhiteListUsingPostRequest';
import { AddBlackWhiteListUsingPostResponse } from './model/AddBlackWhiteListUsingPostResponse';
import { AddRuleAclDto } from './model/AddRuleAclDto';
import { AddRuleAclDtoRules } from './model/AddRuleAclDtoRules';
import { AddRuleAclUsingPostRequest } from './model/AddRuleAclUsingPostRequest';
import { AddRuleAclUsingPostResponse } from './model/AddRuleAclUsingPostResponse';
import { AddServiceItemsUsingPOSTRequestBody } from './model/AddServiceItemsUsingPOSTRequestBody';
import { AddServiceItemsUsingPOSTRequestBodyServiceItems } from './model/AddServiceItemsUsingPOSTRequestBodyServiceItems';
import { AddServiceItemsUsingPostRequest } from './model/AddServiceItemsUsingPostRequest';
import { AddServiceItemsUsingPostResponse } from './model/AddServiceItemsUsingPostResponse';
import { AddServiceSetUsingPOSTRequestBody } from './model/AddServiceSetUsingPOSTRequestBody';
import { AddServiceSetUsingPostRequest } from './model/AddServiceSetUsingPostRequest';
import { AddServiceSetUsingPostResponse } from './model/AddServiceSetUsingPostResponse';
import { AddressItemListResponseDTOData } from './model/AddressItemListResponseDTOData';
import { AddressItemListResponseDTODataRecords } from './model/AddressItemListResponseDTODataRecords';
import { AddressItems } from './model/AddressItems';
import { AddressSetDetailResponseDTOData } from './model/AddressSetDetailResponseDTOData';
import { AddressSetListResponseDTOData } from './model/AddressSetListResponseDTOData';
import { AddressSetListResponseDTODataRecords } from './model/AddressSetListResponseDTODataRecords';
import { BlackWhiteListResponseData } from './model/BlackWhiteListResponseData';
import { BlackWhiteListResponseDataRecords } from './model/BlackWhiteListResponseDataRecords';
import { ChangeEwProtectStatusRequest } from './model/ChangeEwProtectStatusRequest';
import { ChangeEwProtectStatusResponse } from './model/ChangeEwProtectStatusResponse';
import { ChangeIpsProtectModeUsingPostRequest } from './model/ChangeIpsProtectModeUsingPostRequest';
import { ChangeIpsProtectModeUsingPostResponse } from './model/ChangeIpsProtectModeUsingPostResponse';
import { ChangeIpsSwitchUsingPostRequest } from './model/ChangeIpsSwitchUsingPostRequest';
import { ChangeIpsSwitchUsingPostResponse } from './model/ChangeIpsSwitchUsingPostResponse';
import { ChangeProtectEipRequest } from './model/ChangeProtectEipRequest';
import { ChangeProtectEipResponse } from './model/ChangeProtectEipResponse';
import { ChangeProtectStatusRequestBody } from './model/ChangeProtectStatusRequestBody';
import { ClearAccessLogRuleHitCountsDto } from './model/ClearAccessLogRuleHitCountsDto';
import { CommonResponseDTOData } from './model/CommonResponseDTOData';
import { CountEipsRequest } from './model/CountEipsRequest';
import { CountEipsResponse } from './model/CountEipsResponse';
import { DeleteAclRuleCountRequest } from './model/DeleteAclRuleCountRequest';
import { DeleteAclRuleCountResponse } from './model/DeleteAclRuleCountResponse';
import { DeleteAddressItemUsingDeleteRequest } from './model/DeleteAddressItemUsingDeleteRequest';
import { DeleteAddressItemUsingDeleteResponse } from './model/DeleteAddressItemUsingDeleteResponse';
import { DeleteAddressSetInfoUsingDeleteRequest } from './model/DeleteAddressSetInfoUsingDeleteRequest';
import { DeleteAddressSetInfoUsingDeleteResponse } from './model/DeleteAddressSetInfoUsingDeleteResponse';
import { DeleteBlackWhiteListUsingDeleteRequest } from './model/DeleteBlackWhiteListUsingDeleteRequest';
import { DeleteBlackWhiteListUsingDeleteResponse } from './model/DeleteBlackWhiteListUsingDeleteResponse';
import { DeleteRuleAclUsingDeleteRequest } from './model/DeleteRuleAclUsingDeleteRequest';
import { DeleteRuleAclUsingDeleteResponse } from './model/DeleteRuleAclUsingDeleteResponse';
import { DeleteServiceItemUsingDeleteRequest } from './model/DeleteServiceItemUsingDeleteRequest';
import { DeleteServiceItemUsingDeleteResponse } from './model/DeleteServiceItemUsingDeleteResponse';
import { DeleteServiceSetUsingDeleteRequest } from './model/DeleteServiceSetUsingDeleteRequest';
import { DeleteServiceSetUsingDeleteResponse } from './model/DeleteServiceSetUsingDeleteResponse';
import { DnsServersResponseDTO } from './model/DnsServersResponseDTO';
import { EipCountRespData } from './model/EipCountRespData';
import { EipOperateProtectReq } from './model/EipOperateProtectReq';
import { EipOperateProtectReqIpInfos } from './model/EipOperateProtectReqIpInfos';
import { EipResource } from './model/EipResource';
import { EipResponseData } from './model/EipResponseData';
import { ErInstance } from './model/ErInstance';
import { EwProtectResourceInfo } from './model/EwProtectResourceInfo';
import { FirewallInstanceResource } from './model/FirewallInstanceResource';
import { Flavor } from './model/Flavor';
import { GetEastWestFirewallResponseBody } from './model/GetEastWestFirewallResponseBody';
import { GetFirewallInstanceData } from './model/GetFirewallInstanceData';
import { GetFirewallInstanceResponseRecord } from './model/GetFirewallInstanceResponseRecord';
import { HttpQueryCfwAccessControllerLogsResponseDTOData } from './model/HttpQueryCfwAccessControllerLogsResponseDTOData';
import { HttpQueryCfwAccessControllerLogsResponseDTODataRecords } from './model/HttpQueryCfwAccessControllerLogsResponseDTODataRecords';
import { HttpQueryCfwAttackLogsResponseDTOData } from './model/HttpQueryCfwAttackLogsResponseDTOData';
import { HttpQueryCfwAttackLogsResponseDTODataRecords } from './model/HttpQueryCfwAttackLogsResponseDTODataRecords';
import { HttpQueryCfwFlowLogsResponseDTOData } from './model/HttpQueryCfwFlowLogsResponseDTOData';
import { HttpQueryCfwFlowLogsResponseDTODataRecords } from './model/HttpQueryCfwFlowLogsResponseDTODataRecords';
import { IdObject } from './model/IdObject';
import { IpsProtectDTO } from './model/IpsProtectDTO';
import { IpsProtectModeObject } from './model/IpsProtectModeObject';
import { IpsSwitchDTO } from './model/IpsSwitchDTO';
import { IpsSwitchResponseDTO } from './model/IpsSwitchResponseDTO';
import { ListAccessControlLogsRequest } from './model/ListAccessControlLogsRequest';
import { ListAccessControlLogsResponse } from './model/ListAccessControlLogsResponse';
import { ListAddressItemsUsingGetRequest } from './model/ListAddressItemsUsingGetRequest';
import { ListAddressItemsUsingGetResponse } from './model/ListAddressItemsUsingGetResponse';
import { ListAddressSetDetailUsingGetRequest } from './model/ListAddressSetDetailUsingGetRequest';
import { ListAddressSetDetailUsingGetResponse } from './model/ListAddressSetDetailUsingGetResponse';
import { ListAddressSetListUsingGetRequest } from './model/ListAddressSetListUsingGetRequest';
import { ListAddressSetListUsingGetResponse } from './model/ListAddressSetListUsingGetResponse';
import { ListAttackLogsRequest } from './model/ListAttackLogsRequest';
import { ListAttackLogsResponse } from './model/ListAttackLogsResponse';
import { ListBlackWhiteListsUsingGetRequest } from './model/ListBlackWhiteListsUsingGetRequest';
import { ListBlackWhiteListsUsingGetResponse } from './model/ListBlackWhiteListsUsingGetResponse';
import { ListDnsServersRequest } from './model/ListDnsServersRequest';
import { ListDnsServersResponse } from './model/ListDnsServersResponse';
import { ListEastWestFirewallRequest } from './model/ListEastWestFirewallRequest';
import { ListEastWestFirewallResponse } from './model/ListEastWestFirewallResponse';
import { ListEipResourcesRequest } from './model/ListEipResourcesRequest';
import { ListEipResourcesResponse } from './model/ListEipResourcesResponse';
import { ListFirewallUsingGetRequest } from './model/ListFirewallUsingGetRequest';
import { ListFirewallUsingGetResponse } from './model/ListFirewallUsingGetResponse';
import { ListFlowLogsRequest } from './model/ListFlowLogsRequest';
import { ListFlowLogsResponse } from './model/ListFlowLogsResponse';
import { ListIpsProtectModeUsingPostRequest } from './model/ListIpsProtectModeUsingPostRequest';
import { ListIpsProtectModeUsingPostResponse } from './model/ListIpsProtectModeUsingPostResponse';
import { ListIpsSwitchStatusUsingGetRequest } from './model/ListIpsSwitchStatusUsingGetRequest';
import { ListIpsSwitchStatusUsingGetResponse } from './model/ListIpsSwitchStatusUsingGetResponse';
import { ListParseDomainDetailsRequest } from './model/ListParseDomainDetailsRequest';
import { ListParseDomainDetailsResponse } from './model/ListParseDomainDetailsResponse';
import { ListRuleAclUsingPutRequest } from './model/ListRuleAclUsingPutRequest';
import { ListRuleAclUsingPutResponse } from './model/ListRuleAclUsingPutResponse';
import { ListRuleAclsUsingGetRequest } from './model/ListRuleAclsUsingGetRequest';
import { ListRuleAclsUsingGetResponse } from './model/ListRuleAclsUsingGetResponse';
import { ListRuleHitCountDto } from './model/ListRuleHitCountDto';
import { ListRuleHitCountRequest } from './model/ListRuleHitCountRequest';
import { ListRuleHitCountResponse } from './model/ListRuleHitCountResponse';
import { ListServiceItemsDetailsRequest } from './model/ListServiceItemsDetailsRequest';
import { ListServiceItemsDetailsResponse } from './model/ListServiceItemsDetailsResponse';
import { ListServiceSetDetailsRequest } from './model/ListServiceSetDetailsRequest';
import { ListServiceSetDetailsResponse } from './model/ListServiceSetDetailsResponse';
import { ListServiceSetRequest } from './model/ListServiceSetRequest';
import { ListServiceSetResponse } from './model/ListServiceSetResponse';
import { ListVpcProtectsRequest } from './model/ListVpcProtectsRequest';
import { ListVpcProtectsResponse } from './model/ListVpcProtectsResponse';
import { OrderRuleAclDto } from './model/OrderRuleAclDto';
import { Packet } from './model/Packet';
import { PacketMessage } from './model/PacketMessage';
import { ProtectObjectVO } from './model/ProtectObjectVO';
import { RuleAclListResponseDTOData } from './model/RuleAclListResponseDTOData';
import { RuleAclListResponseDTODataRecords } from './model/RuleAclListResponseDTODataRecords';
import { RuleAddressDto } from './model/RuleAddressDto';
import { RuleHitCountObject } from './model/RuleHitCountObject';
import { RuleHitCountRecords } from './model/RuleHitCountRecords';
import { RuleId } from './model/RuleId';
import { RuleIdList } from './model/RuleIdList';
import { RuleServiceDto } from './model/RuleServiceDto';
import { ServiceItemIds } from './model/ServiceItemIds';
import { ServiceItemListResponseDtoData } from './model/ServiceItemListResponseDtoData';
import { ServiceItemListResponseDtoDataRecords } from './model/ServiceItemListResponseDtoDataRecords';
import { ServiceSet } from './model/ServiceSet';
import { ServiceSetDetailResponseDto } from './model/ServiceSetDetailResponseDto';
import { ServiceSetRecords } from './model/ServiceSetRecords';
import { SubnetInfo } from './model/SubnetInfo';
import { SuccessRspData } from './model/SuccessRspData';
import { Tag } from './model/Tag';
import { UpdateAddressSetDto } from './model/UpdateAddressSetDto';
import { UpdateAddressSetInfoUsingPutRequest } from './model/UpdateAddressSetInfoUsingPutRequest';
import { UpdateAddressSetInfoUsingPutResponse } from './model/UpdateAddressSetInfoUsingPutResponse';
import { UpdateBlackWhiteListDto } from './model/UpdateBlackWhiteListDto';
import { UpdateBlackWhiteListUsingPutRequest } from './model/UpdateBlackWhiteListUsingPutRequest';
import { UpdateBlackWhiteListUsingPutResponse } from './model/UpdateBlackWhiteListUsingPutResponse';
import { UpdateDnsServersRequest } from './model/UpdateDnsServersRequest';
import { UpdateDnsServersRequestBody } from './model/UpdateDnsServersRequestBody';
import { UpdateDnsServersRequestBodyDnsServer } from './model/UpdateDnsServersRequestBodyDnsServer';
import { UpdateDnsServersResponse } from './model/UpdateDnsServersResponse';
import { UpdateRuleAclDto } from './model/UpdateRuleAclDto';
import { UpdateRuleAclUsingPutRequest } from './model/UpdateRuleAclUsingPutRequest';
import { UpdateRuleAclUsingPutResponse } from './model/UpdateRuleAclUsingPutResponse';
import { UpdateServiceSetUsingPUTRequestBody } from './model/UpdateServiceSetUsingPUTRequestBody';
import { UpdateServiceSetUsingPutRequest } from './model/UpdateServiceSetUsingPutRequest';
import { UpdateServiceSetUsingPutResponse } from './model/UpdateServiceSetUsingPutResponse';
import { VPCProtectsVo } from './model/VPCProtectsVo';
import { VpcAttachmentDetail } from './model/VpcAttachmentDetail';
import { VpcDetail } from './model/VpcDetail';

export class CfwClient {
    public static newBuilder(): ClientBuilder<CfwClient> {
            return new ClientBuilder<CfwClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 添加地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加地址组成员
     * @param {string} projectId 租户项目id
     * @param {AddAddressItemsInfoDto} addAddressItemsUsingPOSTRequestBody 添加地址组成员请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAddressItemsUsingPost(addAddressItemsUsingPostRequest?: AddAddressItemsUsingPostRequest): Promise<AddAddressItemsUsingPostResponse> {
        const options = ParamCreater().addAddressItemsUsingPost(addAddressItemsUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加地址组
     * @param {string} projectId 租户项目id
     * @param {AddAddressSetDto} addAddressSetInfoUsingPOSTRequestBody 添加地址组请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAddressSetInfoUsingPost(addAddressSetInfoUsingPostRequest?: AddAddressSetInfoUsingPostRequest): Promise<AddAddressSetInfoUsingPostResponse> {
        const options = ParamCreater().addAddressSetInfoUsingPost(addAddressSetInfoUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建黑白名单规则
     * @param {string} projectId 租户项目id
     * @param {AddBlackWhiteListDto} addBlackWhiteListUsingPOSTRequestBody 添加黑白名单请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addBlackWhiteListUsingPost(addBlackWhiteListUsingPostRequest?: AddBlackWhiteListUsingPostRequest): Promise<AddBlackWhiteListUsingPostResponse> {
        const options = ParamCreater().addBlackWhiteListUsingPost(addBlackWhiteListUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加服务组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建服务成员
     * @param {string} projectId 租户项目id
     * @param {AddServiceItemsUsingPOSTRequestBody} addServiceItemsUsingPOSTRequestBody 创建服务组成员请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServiceItemsUsingPost(addServiceItemsUsingPostRequest?: AddServiceItemsUsingPostRequest): Promise<AddServiceItemsUsingPostResponse> {
        const options = ParamCreater().addServiceItemsUsingPost(addServiceItemsUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建服务组
     * @param {string} projectId 租户项目id
     * @param {AddServiceSetUsingPOSTRequestBody} addServiceSetUsingPOSTRequestBody 创建服务组请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServiceSetUsingPost(addServiceSetUsingPostRequest?: AddServiceSetUsingPostRequest): Promise<AddServiceSetUsingPostResponse> {
        const options = ParamCreater().addServiceSetUsingPost(addServiceSetUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 东西向防护资源防护开启/关闭
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改东西向防火墙防护状态
     * @param {string} projectId 租户项目id
     * @param {ChangeProtectStatusRequestBody} changeEwProtectStatusRequestBody 修改东西向防护状态请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeEwProtectStatus(changeEwProtectStatusRequest?: ChangeEwProtectStatusRequest): Promise<ChangeEwProtectStatusResponse> {
        const options = ParamCreater().changeEwProtectStatus(changeEwProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换防护模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换防护模式
     * @param {string} projectId 租户项目id
     * @param {IpsProtectDTO} changeIpsProtectModeUsingPOSTRequestBody ChangeIpsProtectModeUsingPOSTRequestBody
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIpsProtectModeUsingPost(changeIpsProtectModeUsingPostRequest?: ChangeIpsProtectModeUsingPostRequest): Promise<ChangeIpsProtectModeUsingPostResponse> {
        const options = ParamCreater().changeIpsProtectModeUsingPost(changeIpsProtectModeUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清除规则击中次数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则击中次数
     * @param {string} projectId project id
     * @param {ClearAccessLogRuleHitCountsDto} deleteAclRuleCountRequestBody clear access log rule hit counts dto
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAclRuleCount(deleteAclRuleCountRequest?: DeleteAclRuleCountRequest): Promise<DeleteAclRuleCountResponse> {
        const options = ParamCreater().deleteAclRuleCount(deleteAclRuleCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地址组成员
     * @param {string} itemId 地址组成员id
     * @param {string} projectId 租户项目id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddressItemUsingDelete(deleteAddressItemUsingDeleteRequest?: DeleteAddressItemUsingDeleteRequest): Promise<DeleteAddressItemUsingDeleteResponse> {
        const options = ParamCreater().deleteAddressItemUsingDelete(deleteAddressItemUsingDeleteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地址组
     * @param {string} projectId 租户项目id
     * @param {string} setId 地址组id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddressSetInfoUsingDelete(deleteAddressSetInfoUsingDeleteRequest?: DeleteAddressSetInfoUsingDeleteRequest): Promise<DeleteAddressSetInfoUsingDeleteResponse> {
        const options = ParamCreater().deleteAddressSetInfoUsingDelete(deleteAddressSetInfoUsingDeleteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除黑白名单规则
     * @param {string} projectId 租户项目id
     * @param {string} listId 黑白名单id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBlackWhiteListUsingDelete(deleteBlackWhiteListUsingDeleteRequest?: DeleteBlackWhiteListUsingDeleteRequest): Promise<DeleteBlackWhiteListUsingDeleteResponse> {
        const options = ParamCreater().deleteBlackWhiteListUsingDelete(deleteBlackWhiteListUsingDeleteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务成员
     * @param {string} projectId 租户项目id
     * @param {string} itemId 服务组成员id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServiceItemUsingDelete(deleteServiceItemUsingDeleteRequest?: DeleteServiceItemUsingDeleteRequest): Promise<DeleteServiceItemUsingDeleteResponse> {
        const options = ParamCreater().deleteServiceItemUsingDelete(deleteServiceItemUsingDeleteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务组
     * @param {string} projectId 租户项目id
     * @param {string} setId 服务集合id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServiceSetUsingDelete(deleteServiceSetUsingDeleteRequest?: DeleteServiceSetUsingDeleteRequest): Promise<DeleteServiceSetUsingDeleteResponse> {
        const options = ParamCreater().deleteServiceSetUsingDelete(deleteServiceSetUsingDeleteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询访问控制日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询访问控制日志
     * @param {string} projectId 租户项目id
     * @param {string} fwInstanceId 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。
     * @param {number} startTime 开始时间
     * @param {number} endTime 结束时间
     * @param {number} limit 每页显示个数
     * @param {string} [ruleId] 规则ID
     * @param {string} [srcIp] 源IP
     * @param {number} [srcPort] 源端口
     * @param {string} [dstIp] 目的IP
     * @param {number} [dstPort] 目的端口
     * @param {string} [protocol] 协议
     * @param {string} [app] 应用协议
     * @param {string} [logId] 文档ID,第一页为空，其他页不为空
     * @param {number} [nextDate] 日期,第一页为空，其他页不为空
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {'internet' | 'nat' | 'vpc'} [logType] 日志类型
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessControlLogs(listAccessControlLogsRequest?: ListAccessControlLogsRequest): Promise<ListAccessControlLogsResponse> {
        const options = ParamCreater().listAccessControlLogs(listAccessControlLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组成员
     * @param {string} projectId 租户项目id
     * @param {string} setId 地址组id
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 关键字
     * @param {string} [address] ip地址
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressItemsUsingGet(listAddressItemsUsingGetRequest?: ListAddressItemsUsingGetRequest): Promise<ListAddressItemsUsingGetResponse> {
        const options = ParamCreater().listAddressItemsUsingGet(listAddressItemsUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组详细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组详细信息
     * @param {string} projectId 租户项目id
     * @param {string} setId 地址组id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressSetDetailUsingGet(listAddressSetDetailUsingGetRequest?: ListAddressSetDetailUsingGetRequest): Promise<ListAddressSetDetailUsingGetResponse> {
        const options = ParamCreater().listAddressSetDetailUsingGet(listAddressSetDetailUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组列表
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 关键字
     * @param {string} [address] ip地址
     * @param {0 | 1} [addressType] 地址类型0 ipv4,1 ipv6
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressSetListUsingGet(listAddressSetListUsingGetRequest?: ListAddressSetListUsingGetRequest): Promise<ListAddressSetListUsingGetResponse> {
        const options = ParamCreater().listAddressSetListUsingGet(listAddressSetListUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询攻击日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击日志
     * @param {string} projectId 租户项目id
     * @param {number} startTime 开始时间
     * @param {number} endTime 结束时间
     * @param {number} limit 每页显示个数
     * @param {string} fwInstanceId 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。
     * @param {string} [srcIp] 源IP
     * @param {number} [srcPort] 源端口号
     * @param {string} [dstIp] 目的IP
     * @param {number} [dstPort] 目的端口号
     * @param {'6' | '17' | '1' | '58'} [protocol] 协议类型:TCP为6, UDP为17,ICMP为1,ICMPV6为58,ANY为-1,手动类型不为空，自动类型为空
     * @param {string} [app] 应用协议
     * @param {string} [logId] 日志ID，当是第一页时为空，不是第一页时不为空
     * @param {number} [nextDate] 下个日期，当是第一页时为空，不是第一页时不为空
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {'0' | '1'} [action] 动作0：permit,1：deny
     * @param {'0' | '1'} [direction] 方向0：外到内1：内到外
     * @param {string} [attackType] 入侵事件类型
     * @param {string} [attackRule] 入侵事件规则
     * @param {string} [level] 威胁等级
     * @param {string} [source] 判断来源
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttackLogs(listAttackLogsRequest?: ListAttackLogsRequest): Promise<ListAttackLogsResponse> {
        const options = ParamCreater().listAttackLogs(listAttackLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询黑白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询黑白名单列表
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {4 | 5} listType 黑白名单类型4：黑名单，5：白名单
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {0 | 1 | 2} [addressType] IP地址类型0：ipv4,1:ipv6,2:domain
     * @param {string} [address] ip地址
     * @param {string} [port] 端口
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBlackWhiteListsUsingGet(listBlackWhiteListsUsingGetRequest?: ListBlackWhiteListsUsingGetRequest): Promise<ListBlackWhiteListsUsingGetResponse> {
        const options = ParamCreater().listBlackWhiteListsUsingGet(listBlackWhiteListsUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询dns服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询dns服务器列表
     * @param {string} projectId 租户项目id
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。若object_Id非空，默认返回object_Id对应墙的信息；填写时object_Id需要属于fw_instance_Id对应的墙。
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDnsServers(listDnsServersRequest?: ListDnsServersRequest): Promise<ListDnsServersResponse> {
        const options = ParamCreater().listDnsServers(listDnsServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询东西向防火墙信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取东西向防火墙信息
     * @param {string} projectId 租户项目id
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEastWestFirewall(listEastWestFirewallRequest?: ListEastWestFirewallRequest): Promise<ListEastWestFirewallResponse> {
        const options = ParamCreater().listEastWestFirewall(listEastWestFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防火墙实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防火墙实例
     * @param {string} projectId 租户项目id
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} limit 每页显示个数
     * @param {0 | 1} serviceType 服务类型 0 南北向防火墙 1 东西向防火墙
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFirewallUsingGet(listFirewallUsingGetRequest?: ListFirewallUsingGetRequest): Promise<ListFirewallUsingGetResponse> {
        const options = ParamCreater().listFirewallUsingGet(listFirewallUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流日志
     * @param {string} projectId 租户项目id
     * @param {string} fwInstanceId 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。
     * @param {number} startTime 开始时间
     * @param {number} endTime 结束时间
     * @param {number} limit 每页显示个数
     * @param {string} [direction] 方向
     * @param {'internet' | 'vpc' | 'nat'} [logType] 日志类型
     * @param {string} [srcIp] 源IP
     * @param {number} [srcPort] 源端口
     * @param {string} [dstIp] 目的IP
     * @param {number} [dstPort] 目的端口
     * @param {'6' | '17' | '1' | '58'} [protocol] 协议类型:TCP为6, UDP为17,ICMP为1,ICMPV6为58,ANY为-1,手动类型不为空，自动类型为空
     * @param {string} [app] 应用协议
     * @param {string} [logId] 文档ID，首页时为null，非首页时不为null
     * @param {number} [nextDate] 日期，首页时为null，非首页时不为null
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
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
     * 查询防护模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护模式
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpsProtectModeUsingPost(listIpsProtectModeUsingPostRequest?: ListIpsProtectModeUsingPostRequest): Promise<ListIpsProtectModeUsingPostResponse> {
        const options = ParamCreater().listIpsProtectModeUsingPost(listIpsProtectModeUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 测试域名有效性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名解析ip地址
     * @param {string} projectId 租户项目id
     * @param {string} domainName 域名
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listParseDomainDetails(listParseDomainDetailsRequest?: ListParseDomainDetailsRequest): Promise<ListParseDomainDetailsResponse> {
        const options = ParamCreater().listParseDomainDetails(listParseDomainDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规则击中次数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则击中次数
     * @param {string} projectId 租户项目id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {ListRuleHitCountDto} [listRuleHitCountRequestBody] 获取规则击中次数DTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleHitCount(listRuleHitCountRequest?: ListRuleHitCountRequest): Promise<ListRuleHitCountResponse> {
        const options = ParamCreater().listRuleHitCount(listRuleHitCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务组成员列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务成员列表
     * @param {string} projectId 租户项目id
     * @param {string} setId 服务组id
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 查询字段
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceItemsDetails(listServiceItemsDetailsRequest?: ListServiceItemsDetailsRequest): Promise<ListServiceItemsDetailsResponse> {
        const options = ParamCreater().listServiceItemsDetails(listServiceItemsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取服务组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务组列表
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {number} limit 每页查询个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 关键字
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceSet(listServiceSetRequest?: ListServiceSetRequest): Promise<ListServiceSetResponse> {
        const options = ParamCreater().listServiceSet(listServiceSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务组细节
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务组详情
     * @param {string} projectId 租户项目id
     * @param {string} setId 服务组id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceSetDetails(listServiceSetDetailsRequest?: ListServiceSetDetailsRequest): Promise<ListServiceSetDetailsResponse> {
        const options = ParamCreater().listServiceSetDetails(listServiceSetDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新地址组信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新地址组信息
     * @param {string} projectId 租户项目id
     * @param {string} setId 地址组id
     * @param {UpdateAddressSetDto} updateAddressSetInfoUsingPUTRequestBody UpdateAddressSetInfoUsingPUTRequestBody
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAddressSetInfoUsingPut(updateAddressSetInfoUsingPutRequest?: UpdateAddressSetInfoUsingPutRequest): Promise<UpdateAddressSetInfoUsingPutResponse> {
        const options = ParamCreater().updateAddressSetInfoUsingPut(updateAddressSetInfoUsingPutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新黑白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新黑白名单列表
     * @param {string} projectId 租户项目id
     * @param {string} listId 黑白名单列表id
     * @param {UpdateBlackWhiteListDto} updateBlackWhiteListUsingPUTRequestBody 更新黑白名单请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBlackWhiteListUsingPut(updateBlackWhiteListUsingPutRequest?: UpdateBlackWhiteListUsingPutRequest): Promise<UpdateBlackWhiteListUsingPutResponse> {
        const options = ParamCreater().updateBlackWhiteListUsingPut(updateBlackWhiteListUsingPutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新dns服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新dns服务器列表
     * @param {string} projectId 租户项目id
     * @param {UpdateDnsServersRequestBody} updateDnsServersRequestBody 更新dns服务器列表请求体
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。若object_Id非空，默认返回object_Id对应墙的信息；填写时object_Id需要属于fw_instance_Id对应的墙。
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDnsServers(updateDnsServersRequest?: UpdateDnsServersRequest): Promise<UpdateDnsServersResponse> {
        const options = ParamCreater().updateDnsServers(updateDnsServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新服务组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改服务组
     * @param {string} projectId 租户项目id
     * @param {string} setId 服务组id
     * @param {UpdateServiceSetUsingPUTRequestBody} updateServiceSetUsingPUTRequestBody 更新服务组的请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServiceSetUsingPut(updateServiceSetUsingPutRequest?: UpdateServiceSetUsingPutRequest): Promise<UpdateServiceSetUsingPutResponse> {
        const options = ParamCreater().updateServiceSetUsingPut(updateServiceSetUsingPutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建ACL规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ACL规则
     * @param {string} projectId 租户项目id
     * @param {AddRuleAclDto} addRuleAclUsingPOSTRequestBody 添加aclDto
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRuleAclUsingPost(addRuleAclUsingPostRequest?: AddRuleAclUsingPostRequest): Promise<AddRuleAclUsingPostResponse> {
        const options = ParamCreater().addRuleAclUsingPost(addRuleAclUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除ACL规则组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ACL规则组
     * @param {string} projectId 租户项目Id
     * @param {string} aclRuleId 规则Id
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRuleAclUsingDelete(deleteRuleAclUsingDeleteRequest?: DeleteRuleAclUsingDeleteRequest): Promise<DeleteRuleAclUsingDeleteResponse> {
        const options = ParamCreater().deleteRuleAclUsingDelete(deleteRuleAclUsingDeleteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ACL防护规则优先级设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ACL防护规则优先级设置
     * @param {string} projectId 租户项目id
     * @param {string} aclRuleId 规则id
     * @param {OrderRuleAclDto} listRuleAclUsingPUTRequestBody 规则排序请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleAclUsingPut(listRuleAclUsingPutRequest?: ListRuleAclUsingPutRequest): Promise<ListRuleAclUsingPutResponse> {
        const options = ParamCreater().listRuleAclUsingPut(listRuleAclUsingPutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护规则
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {0 | 1 | 2} [type] 规则Type0：互联网规则,1：vpc规则, 2:nat规则
     * @param {6 | 17 | 1 | 58} [protocol] 协议类型:TCP为6, UDP为17,ICMP为1,ICMPV6为58,ANY为-1
     * @param {string} [ip] ip地址
     * @param {string} [name] 名称
     * @param {number} [direction] 方向0：外到内1：内到外
     * @param {0 | 1} [status] 规则下发状态 0：禁用,1：启用
     * @param {0 | 1} [actionType] 动作0：permit,1：deny
     * @param {0 | 1 | 2} [addressType] 地址类型0 ipv4,1 ipv6,2 domain
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleAclsUsingGet(listRuleAclsUsingGetRequest?: ListRuleAclsUsingGetRequest): Promise<ListRuleAclsUsingGetResponse> {
        const options = ParamCreater().listRuleAclsUsingGet(listRuleAclsUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新ACL规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新ACL规则
     * @param {string} projectId 租户项目id
     * @param {string} aclRuleId 规则Id
     * @param {UpdateRuleAclDto} updateRuleAclUsingPUTRequestBody 更新规则请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRuleAclUsingPut(updateRuleAclUsingPutRequest?: UpdateRuleAclUsingPutRequest): Promise<UpdateRuleAclUsingPutResponse> {
        const options = ParamCreater().updateRuleAclUsingPut(updateRuleAclUsingPutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭EIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性IP开启关闭
     * @param {string} projectId 租户项目ID
     * @param {EipOperateProtectReq} changeProtectEipRequestBody 开启关闭EIP请求体
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeProtectEip(changeProtectEipRequest?: ChangeProtectEipRequest): Promise<ChangeProtectEipResponse> {
        const options = ParamCreater().changeProtectEip(changeProtectEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Eip个数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Eip个数
     * @param {string} projectId 租户项目ID
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countEips(countEipsRequest?: CountEipsRequest): Promise<CountEipsResponse> {
        const options = ParamCreater().countEips(countEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 弹性IP列表查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性IP列表查询
     * @param {string} projectId 租户项目ID
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 弹性公网ID/弹性公网IP
     * @param {'null' | '0' | '1'} [status] 防护状态 null-全部 0-开启防护 1-关闭防护
     * @param {0 | 1} [sync] 是否同步租户EIP数据 0-不同步 1-同步
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [deviceKey] 设备键
     * @param {number} [addressType] 地址类型0 ipv4,1 ipv6
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {string} [fwKeyWord] 所绑定防火墙id防火墙名称
     * @param {string} [epsId] 弹性公网ip的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEipResources(listEipResourcesRequest?: ListEipResourcesRequest): Promise<ListEipResourcesResponse> {
        const options = ParamCreater().listEipResources(listEipResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换开关状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary IPS特性开关操作
     * @param {string} projectId project_id
     * @param {IpsSwitchDTO} changeIpsSwitchUsingPOSTRequestBody ChangeIpsSwitchUsingPOSTRequestBody
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIpsSwitchUsingPost(changeIpsSwitchUsingPostRequest?: ChangeIpsSwitchUsingPostRequest): Promise<ChangeIpsSwitchUsingPostResponse> {
        const options = ParamCreater().changeIpsSwitchUsingPost(changeIpsSwitchUsingPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IPS特性开关状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IPS特性开关状态
     * @param {string} projectId project_id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpsSwitchStatusUsingGet(listIpsSwitchStatusUsingGetRequest?: ListIpsSwitchStatusUsingGetRequest): Promise<ListIpsSwitchStatusUsingGetResponse> {
        const options = ParamCreater().listIpsSwitchStatusUsingGet(listIpsSwitchStatusUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护vpc信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护VPC数
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用查询防火墙实例接口获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。具体可参考APIExlorer和帮助中心FAQ。
     * @param {string} [enterpriseProjectId] 企业项目id，用户支持企业项目后，由企业项目生成的id。
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用查询防火墙实例接口获得。具体可参考APIExlorer和帮助中心FAQ。默认情况下，fw_instance_Id为空时，返回帐号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcProtects(listVpcProtectsRequest?: ListVpcProtectsRequest): Promise<ListVpcProtectsResponse> {
        const options = ParamCreater().listVpcProtects(listVpcProtectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAddressItemsUsingPost(addAddressItemsUsingPostRequest?: AddAddressItemsUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/address-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addAddressItemsUsingPostRequest !== null && addAddressItemsUsingPostRequest !== undefined) {
                if (addAddressItemsUsingPostRequest instanceof AddAddressItemsUsingPostRequest) {
                    projectId = addAddressItemsUsingPostRequest.projectId;
                    body = addAddressItemsUsingPostRequest.body
                    enterpriseProjectId = addAddressItemsUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = addAddressItemsUsingPostRequest.fwInstanceId;
                } else {
                    projectId = addAddressItemsUsingPostRequest['project_id'];
                    body = addAddressItemsUsingPostRequest['body'];
                    enterpriseProjectId = addAddressItemsUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = addAddressItemsUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addAddressItemsUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAddressSetInfoUsingPost(addAddressSetInfoUsingPostRequest?: AddAddressSetInfoUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/address-set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addAddressSetInfoUsingPostRequest !== null && addAddressSetInfoUsingPostRequest !== undefined) {
                if (addAddressSetInfoUsingPostRequest instanceof AddAddressSetInfoUsingPostRequest) {
                    projectId = addAddressSetInfoUsingPostRequest.projectId;
                    body = addAddressSetInfoUsingPostRequest.body
                    enterpriseProjectId = addAddressSetInfoUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = addAddressSetInfoUsingPostRequest.fwInstanceId;
                } else {
                    projectId = addAddressSetInfoUsingPostRequest['project_id'];
                    body = addAddressSetInfoUsingPostRequest['body'];
                    enterpriseProjectId = addAddressSetInfoUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = addAddressSetInfoUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addAddressSetInfoUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addBlackWhiteListUsingPost(addBlackWhiteListUsingPostRequest?: AddBlackWhiteListUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/black-white-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addBlackWhiteListUsingPostRequest !== null && addBlackWhiteListUsingPostRequest !== undefined) {
                if (addBlackWhiteListUsingPostRequest instanceof AddBlackWhiteListUsingPostRequest) {
                    projectId = addBlackWhiteListUsingPostRequest.projectId;
                    body = addBlackWhiteListUsingPostRequest.body
                    enterpriseProjectId = addBlackWhiteListUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = addBlackWhiteListUsingPostRequest.fwInstanceId;
                } else {
                    projectId = addBlackWhiteListUsingPostRequest['project_id'];
                    body = addBlackWhiteListUsingPostRequest['body'];
                    enterpriseProjectId = addBlackWhiteListUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = addBlackWhiteListUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addBlackWhiteListUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加服务组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addServiceItemsUsingPost(addServiceItemsUsingPostRequest?: AddServiceItemsUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addServiceItemsUsingPostRequest !== null && addServiceItemsUsingPostRequest !== undefined) {
                if (addServiceItemsUsingPostRequest instanceof AddServiceItemsUsingPostRequest) {
                    projectId = addServiceItemsUsingPostRequest.projectId;
                    body = addServiceItemsUsingPostRequest.body
                    enterpriseProjectId = addServiceItemsUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = addServiceItemsUsingPostRequest.fwInstanceId;
                } else {
                    projectId = addServiceItemsUsingPostRequest['project_id'];
                    body = addServiceItemsUsingPostRequest['body'];
                    enterpriseProjectId = addServiceItemsUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = addServiceItemsUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addServiceItemsUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addServiceSetUsingPost(addServiceSetUsingPostRequest?: AddServiceSetUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service-set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addServiceSetUsingPostRequest !== null && addServiceSetUsingPostRequest !== undefined) {
                if (addServiceSetUsingPostRequest instanceof AddServiceSetUsingPostRequest) {
                    projectId = addServiceSetUsingPostRequest.projectId;
                    body = addServiceSetUsingPostRequest.body
                    enterpriseProjectId = addServiceSetUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = addServiceSetUsingPostRequest.fwInstanceId;
                } else {
                    projectId = addServiceSetUsingPostRequest['project_id'];
                    body = addServiceSetUsingPostRequest['body'];
                    enterpriseProjectId = addServiceSetUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = addServiceSetUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addServiceSetUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 东西向防护资源防护开启/关闭
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeEwProtectStatus(changeEwProtectStatusRequest?: ChangeEwProtectStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/firewall/east-west/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeEwProtectStatusRequest !== null && changeEwProtectStatusRequest !== undefined) {
                if (changeEwProtectStatusRequest instanceof ChangeEwProtectStatusRequest) {
                    projectId = changeEwProtectStatusRequest.projectId;
                    body = changeEwProtectStatusRequest.body
                    enterpriseProjectId = changeEwProtectStatusRequest.enterpriseProjectId;
                    fwInstanceId = changeEwProtectStatusRequest.fwInstanceId;
                } else {
                    projectId = changeEwProtectStatusRequest['project_id'];
                    body = changeEwProtectStatusRequest['body'];
                    enterpriseProjectId = changeEwProtectStatusRequest['enterprise_project_id'];
                    fwInstanceId = changeEwProtectStatusRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeEwProtectStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换防护模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIpsProtectModeUsingPost(changeIpsProtectModeUsingPostRequest?: ChangeIpsProtectModeUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ips/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeIpsProtectModeUsingPostRequest !== null && changeIpsProtectModeUsingPostRequest !== undefined) {
                if (changeIpsProtectModeUsingPostRequest instanceof ChangeIpsProtectModeUsingPostRequest) {
                    projectId = changeIpsProtectModeUsingPostRequest.projectId;
                    body = changeIpsProtectModeUsingPostRequest.body
                    enterpriseProjectId = changeIpsProtectModeUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = changeIpsProtectModeUsingPostRequest.fwInstanceId;
                } else {
                    projectId = changeIpsProtectModeUsingPostRequest['project_id'];
                    body = changeIpsProtectModeUsingPostRequest['body'];
                    enterpriseProjectId = changeIpsProtectModeUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = changeIpsProtectModeUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeIpsProtectModeUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 清除规则击中次数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAclRuleCount(deleteAclRuleCountRequest?: DeleteAclRuleCountRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/acl-rule/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAclRuleCountRequest !== null && deleteAclRuleCountRequest !== undefined) {
                if (deleteAclRuleCountRequest instanceof DeleteAclRuleCountRequest) {
                    projectId = deleteAclRuleCountRequest.projectId;
                    body = deleteAclRuleCountRequest.body
                    enterpriseProjectId = deleteAclRuleCountRequest.enterpriseProjectId;
                    fwInstanceId = deleteAclRuleCountRequest.fwInstanceId;
                } else {
                    projectId = deleteAclRuleCountRequest['project_id'];
                    body = deleteAclRuleCountRequest['body'];
                    enterpriseProjectId = deleteAclRuleCountRequest['enterprise_project_id'];
                    fwInstanceId = deleteAclRuleCountRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAclRuleCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddressItemUsingDelete(deleteAddressItemUsingDeleteRequest?: DeleteAddressItemUsingDeleteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/address-items/{item_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let itemId;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAddressItemUsingDeleteRequest !== null && deleteAddressItemUsingDeleteRequest !== undefined) {
                if (deleteAddressItemUsingDeleteRequest instanceof DeleteAddressItemUsingDeleteRequest) {
                    itemId = deleteAddressItemUsingDeleteRequest.itemId;
                    projectId = deleteAddressItemUsingDeleteRequest.projectId;
                    enterpriseProjectId = deleteAddressItemUsingDeleteRequest.enterpriseProjectId;
                    fwInstanceId = deleteAddressItemUsingDeleteRequest.fwInstanceId;
                } else {
                    itemId = deleteAddressItemUsingDeleteRequest['item_id'];
                    projectId = deleteAddressItemUsingDeleteRequest['project_id'];
                    enterpriseProjectId = deleteAddressItemUsingDeleteRequest['enterprise_project_id'];
                    fwInstanceId = deleteAddressItemUsingDeleteRequest['fw_instance_id'];
                }
            }

        
            if (itemId === null || itemId === undefined) {
            throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling deleteAddressItemUsingDelete.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAddressItemUsingDelete.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'item_id': itemId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddressSetInfoUsingDelete(deleteAddressSetInfoUsingDeleteRequest?: DeleteAddressSetInfoUsingDeleteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/address-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAddressSetInfoUsingDeleteRequest !== null && deleteAddressSetInfoUsingDeleteRequest !== undefined) {
                if (deleteAddressSetInfoUsingDeleteRequest instanceof DeleteAddressSetInfoUsingDeleteRequest) {
                    projectId = deleteAddressSetInfoUsingDeleteRequest.projectId;
                    setId = deleteAddressSetInfoUsingDeleteRequest.setId;
                    enterpriseProjectId = deleteAddressSetInfoUsingDeleteRequest.enterpriseProjectId;
                    fwInstanceId = deleteAddressSetInfoUsingDeleteRequest.fwInstanceId;
                } else {
                    projectId = deleteAddressSetInfoUsingDeleteRequest['project_id'];
                    setId = deleteAddressSetInfoUsingDeleteRequest['set_id'];
                    enterpriseProjectId = deleteAddressSetInfoUsingDeleteRequest['enterprise_project_id'];
                    fwInstanceId = deleteAddressSetInfoUsingDeleteRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAddressSetInfoUsingDelete.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling deleteAddressSetInfoUsingDelete.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBlackWhiteListUsingDelete(deleteBlackWhiteListUsingDeleteRequest?: DeleteBlackWhiteListUsingDeleteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/black-white-list/{list_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let listId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteBlackWhiteListUsingDeleteRequest !== null && deleteBlackWhiteListUsingDeleteRequest !== undefined) {
                if (deleteBlackWhiteListUsingDeleteRequest instanceof DeleteBlackWhiteListUsingDeleteRequest) {
                    projectId = deleteBlackWhiteListUsingDeleteRequest.projectId;
                    listId = deleteBlackWhiteListUsingDeleteRequest.listId;
                    enterpriseProjectId = deleteBlackWhiteListUsingDeleteRequest.enterpriseProjectId;
                    fwInstanceId = deleteBlackWhiteListUsingDeleteRequest.fwInstanceId;
                } else {
                    projectId = deleteBlackWhiteListUsingDeleteRequest['project_id'];
                    listId = deleteBlackWhiteListUsingDeleteRequest['list_id'];
                    enterpriseProjectId = deleteBlackWhiteListUsingDeleteRequest['enterprise_project_id'];
                    fwInstanceId = deleteBlackWhiteListUsingDeleteRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteBlackWhiteListUsingDelete.');
            }
            if (listId === null || listId === undefined) {
            throw new RequiredError('listId','Required parameter listId was null or undefined when calling deleteBlackWhiteListUsingDelete.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'list_id': listId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServiceItemUsingDelete(deleteServiceItemUsingDeleteRequest?: DeleteServiceItemUsingDeleteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/service-items/{item_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let itemId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteServiceItemUsingDeleteRequest !== null && deleteServiceItemUsingDeleteRequest !== undefined) {
                if (deleteServiceItemUsingDeleteRequest instanceof DeleteServiceItemUsingDeleteRequest) {
                    projectId = deleteServiceItemUsingDeleteRequest.projectId;
                    itemId = deleteServiceItemUsingDeleteRequest.itemId;
                    enterpriseProjectId = deleteServiceItemUsingDeleteRequest.enterpriseProjectId;
                    fwInstanceId = deleteServiceItemUsingDeleteRequest.fwInstanceId;
                } else {
                    projectId = deleteServiceItemUsingDeleteRequest['project_id'];
                    itemId = deleteServiceItemUsingDeleteRequest['item_id'];
                    enterpriseProjectId = deleteServiceItemUsingDeleteRequest['enterprise_project_id'];
                    fwInstanceId = deleteServiceItemUsingDeleteRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteServiceItemUsingDelete.');
            }
            if (itemId === null || itemId === undefined) {
            throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling deleteServiceItemUsingDelete.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'item_id': itemId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServiceSetUsingDelete(deleteServiceSetUsingDeleteRequest?: DeleteServiceSetUsingDeleteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/service-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteServiceSetUsingDeleteRequest !== null && deleteServiceSetUsingDeleteRequest !== undefined) {
                if (deleteServiceSetUsingDeleteRequest instanceof DeleteServiceSetUsingDeleteRequest) {
                    projectId = deleteServiceSetUsingDeleteRequest.projectId;
                    setId = deleteServiceSetUsingDeleteRequest.setId;
                    enterpriseProjectId = deleteServiceSetUsingDeleteRequest.enterpriseProjectId;
                    fwInstanceId = deleteServiceSetUsingDeleteRequest.fwInstanceId;
                } else {
                    projectId = deleteServiceSetUsingDeleteRequest['project_id'];
                    setId = deleteServiceSetUsingDeleteRequest['set_id'];
                    enterpriseProjectId = deleteServiceSetUsingDeleteRequest['enterprise_project_id'];
                    fwInstanceId = deleteServiceSetUsingDeleteRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteServiceSetUsingDelete.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling deleteServiceSetUsingDelete.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询访问控制日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessControlLogs(listAccessControlLogsRequest?: ListAccessControlLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/access-control",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let ruleId;
            
            let srcIp;
            
            let srcPort;
            
            let dstIp;
            
            let dstPort;
            
            let protocol;
            
            let app;
            
            let logId;
            
            let nextDate;
            
            let offset;
            
            let logType;
            
            let enterpriseProjectId;

            if (listAccessControlLogsRequest !== null && listAccessControlLogsRequest !== undefined) {
                if (listAccessControlLogsRequest instanceof ListAccessControlLogsRequest) {
                    projectId = listAccessControlLogsRequest.projectId;
                    fwInstanceId = listAccessControlLogsRequest.fwInstanceId;
                    startTime = listAccessControlLogsRequest.startTime;
                    endTime = listAccessControlLogsRequest.endTime;
                    limit = listAccessControlLogsRequest.limit;
                    ruleId = listAccessControlLogsRequest.ruleId;
                    srcIp = listAccessControlLogsRequest.srcIp;
                    srcPort = listAccessControlLogsRequest.srcPort;
                    dstIp = listAccessControlLogsRequest.dstIp;
                    dstPort = listAccessControlLogsRequest.dstPort;
                    protocol = listAccessControlLogsRequest.protocol;
                    app = listAccessControlLogsRequest.app;
                    logId = listAccessControlLogsRequest.logId;
                    nextDate = listAccessControlLogsRequest.nextDate;
                    offset = listAccessControlLogsRequest.offset;
                    logType = listAccessControlLogsRequest.logType;
                    enterpriseProjectId = listAccessControlLogsRequest.enterpriseProjectId;
                } else {
                    projectId = listAccessControlLogsRequest['project_id'];
                    fwInstanceId = listAccessControlLogsRequest['fw_instance_id'];
                    startTime = listAccessControlLogsRequest['start_time'];
                    endTime = listAccessControlLogsRequest['end_time'];
                    limit = listAccessControlLogsRequest['limit'];
                    ruleId = listAccessControlLogsRequest['rule_id'];
                    srcIp = listAccessControlLogsRequest['src_ip'];
                    srcPort = listAccessControlLogsRequest['src_port'];
                    dstIp = listAccessControlLogsRequest['dst_ip'];
                    dstPort = listAccessControlLogsRequest['dst_port'];
                    protocol = listAccessControlLogsRequest['protocol'];
                    app = listAccessControlLogsRequest['app'];
                    logId = listAccessControlLogsRequest['log_id'];
                    nextDate = listAccessControlLogsRequest['next_date'];
                    offset = listAccessControlLogsRequest['offset'];
                    logType = listAccessControlLogsRequest['log_type'];
                    enterpriseProjectId = listAccessControlLogsRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAccessControlLogs.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listAccessControlLogs.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAccessControlLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAccessControlLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAccessControlLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (srcPort !== null && srcPort !== undefined) {
                localVarQueryParameter['src_port'] = srcPort;
            }
            if (dstIp !== null && dstIp !== undefined) {
                localVarQueryParameter['dst_ip'] = dstIp;
            }
            if (dstPort !== null && dstPort !== undefined) {
                localVarQueryParameter['dst_port'] = dstPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (nextDate !== null && nextDate !== undefined) {
                localVarQueryParameter['next_date'] = nextDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressItemsUsingGet(listAddressItemsUsingGetRequest?: ListAddressItemsUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/address-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let address;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listAddressItemsUsingGetRequest !== null && listAddressItemsUsingGetRequest !== undefined) {
                if (listAddressItemsUsingGetRequest instanceof ListAddressItemsUsingGetRequest) {
                    projectId = listAddressItemsUsingGetRequest.projectId;
                    setId = listAddressItemsUsingGetRequest.setId;
                    limit = listAddressItemsUsingGetRequest.limit;
                    offset = listAddressItemsUsingGetRequest.offset;
                    keyWord = listAddressItemsUsingGetRequest.keyWord;
                    address = listAddressItemsUsingGetRequest.address;
                    enterpriseProjectId = listAddressItemsUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listAddressItemsUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listAddressItemsUsingGetRequest['project_id'];
                    setId = listAddressItemsUsingGetRequest['set_id'];
                    limit = listAddressItemsUsingGetRequest['limit'];
                    offset = listAddressItemsUsingGetRequest['offset'];
                    keyWord = listAddressItemsUsingGetRequest['key_word'];
                    address = listAddressItemsUsingGetRequest['address'];
                    enterpriseProjectId = listAddressItemsUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listAddressItemsUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAddressItemsUsingGet.');
            }
            if (setId === null || setId === undefined) {
                throw new RequiredError('setId','Required parameter setId was null or undefined when calling listAddressItemsUsingGet.');
            }
            if (setId !== null && setId !== undefined) {
                localVarQueryParameter['set_id'] = setId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAddressItemsUsingGet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAddressItemsUsingGet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组详细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressSetDetailUsingGet(listAddressSetDetailUsingGetRequest?: ListAddressSetDetailUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/address-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listAddressSetDetailUsingGetRequest !== null && listAddressSetDetailUsingGetRequest !== undefined) {
                if (listAddressSetDetailUsingGetRequest instanceof ListAddressSetDetailUsingGetRequest) {
                    projectId = listAddressSetDetailUsingGetRequest.projectId;
                    setId = listAddressSetDetailUsingGetRequest.setId;
                    enterpriseProjectId = listAddressSetDetailUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listAddressSetDetailUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listAddressSetDetailUsingGetRequest['project_id'];
                    setId = listAddressSetDetailUsingGetRequest['set_id'];
                    enterpriseProjectId = listAddressSetDetailUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listAddressSetDetailUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAddressSetDetailUsingGet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling listAddressSetDetailUsingGet.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressSetListUsingGet(listAddressSetListUsingGetRequest?: ListAddressSetListUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/address-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let address;
            
            let addressType;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listAddressSetListUsingGetRequest !== null && listAddressSetListUsingGetRequest !== undefined) {
                if (listAddressSetListUsingGetRequest instanceof ListAddressSetListUsingGetRequest) {
                    projectId = listAddressSetListUsingGetRequest.projectId;
                    objectId = listAddressSetListUsingGetRequest.objectId;
                    limit = listAddressSetListUsingGetRequest.limit;
                    offset = listAddressSetListUsingGetRequest.offset;
                    keyWord = listAddressSetListUsingGetRequest.keyWord;
                    address = listAddressSetListUsingGetRequest.address;
                    addressType = listAddressSetListUsingGetRequest.addressType;
                    enterpriseProjectId = listAddressSetListUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listAddressSetListUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listAddressSetListUsingGetRequest['project_id'];
                    objectId = listAddressSetListUsingGetRequest['object_id'];
                    limit = listAddressSetListUsingGetRequest['limit'];
                    offset = listAddressSetListUsingGetRequest['offset'];
                    keyWord = listAddressSetListUsingGetRequest['key_word'];
                    address = listAddressSetListUsingGetRequest['address'];
                    addressType = listAddressSetListUsingGetRequest['address_type'];
                    enterpriseProjectId = listAddressSetListUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listAddressSetListUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAddressSetListUsingGet.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listAddressSetListUsingGet.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAddressSetListUsingGet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAddressSetListUsingGet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询攻击日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttackLogs(listAttackLogsRequest?: ListAttackLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/attack",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let fwInstanceId;
            
            let srcIp;
            
            let srcPort;
            
            let dstIp;
            
            let dstPort;
            
            let protocol;
            
            let app;
            
            let logId;
            
            let nextDate;
            
            let offset;
            
            let action;
            
            let direction;
            
            let attackType;
            
            let attackRule;
            
            let level;
            
            let source;
            
            let enterpriseProjectId;

            if (listAttackLogsRequest !== null && listAttackLogsRequest !== undefined) {
                if (listAttackLogsRequest instanceof ListAttackLogsRequest) {
                    projectId = listAttackLogsRequest.projectId;
                    startTime = listAttackLogsRequest.startTime;
                    endTime = listAttackLogsRequest.endTime;
                    limit = listAttackLogsRequest.limit;
                    fwInstanceId = listAttackLogsRequest.fwInstanceId;
                    srcIp = listAttackLogsRequest.srcIp;
                    srcPort = listAttackLogsRequest.srcPort;
                    dstIp = listAttackLogsRequest.dstIp;
                    dstPort = listAttackLogsRequest.dstPort;
                    protocol = listAttackLogsRequest.protocol;
                    app = listAttackLogsRequest.app;
                    logId = listAttackLogsRequest.logId;
                    nextDate = listAttackLogsRequest.nextDate;
                    offset = listAttackLogsRequest.offset;
                    action = listAttackLogsRequest.action;
                    direction = listAttackLogsRequest.direction;
                    attackType = listAttackLogsRequest.attackType;
                    attackRule = listAttackLogsRequest.attackRule;
                    level = listAttackLogsRequest.level;
                    source = listAttackLogsRequest.source;
                    enterpriseProjectId = listAttackLogsRequest.enterpriseProjectId;
                } else {
                    projectId = listAttackLogsRequest['project_id'];
                    startTime = listAttackLogsRequest['start_time'];
                    endTime = listAttackLogsRequest['end_time'];
                    limit = listAttackLogsRequest['limit'];
                    fwInstanceId = listAttackLogsRequest['fw_instance_id'];
                    srcIp = listAttackLogsRequest['src_ip'];
                    srcPort = listAttackLogsRequest['src_port'];
                    dstIp = listAttackLogsRequest['dst_ip'];
                    dstPort = listAttackLogsRequest['dst_port'];
                    protocol = listAttackLogsRequest['protocol'];
                    app = listAttackLogsRequest['app'];
                    logId = listAttackLogsRequest['log_id'];
                    nextDate = listAttackLogsRequest['next_date'];
                    offset = listAttackLogsRequest['offset'];
                    action = listAttackLogsRequest['action'];
                    direction = listAttackLogsRequest['direction'];
                    attackType = listAttackLogsRequest['attack_type'];
                    attackRule = listAttackLogsRequest['attack_rule'];
                    level = listAttackLogsRequest['level'];
                    source = listAttackLogsRequest['source'];
                    enterpriseProjectId = listAttackLogsRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAttackLogs.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAttackLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAttackLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAttackLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listAttackLogs.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (srcPort !== null && srcPort !== undefined) {
                localVarQueryParameter['src_port'] = srcPort;
            }
            if (dstIp !== null && dstIp !== undefined) {
                localVarQueryParameter['dst_ip'] = dstIp;
            }
            if (dstPort !== null && dstPort !== undefined) {
                localVarQueryParameter['dst_port'] = dstPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (nextDate !== null && nextDate !== undefined) {
                localVarQueryParameter['next_date'] = nextDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (attackType !== null && attackType !== undefined) {
                localVarQueryParameter['attack_type'] = attackType;
            }
            if (attackRule !== null && attackRule !== undefined) {
                localVarQueryParameter['attack_rule'] = attackRule;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (source !== null && source !== undefined) {
                localVarQueryParameter['source'] = source;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询黑白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBlackWhiteListsUsingGet(listBlackWhiteListsUsingGetRequest?: ListBlackWhiteListsUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/black-white-lists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let listType;
            
            let limit;
            
            let offset;
            
            let addressType;
            
            let address;
            
            let port;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listBlackWhiteListsUsingGetRequest !== null && listBlackWhiteListsUsingGetRequest !== undefined) {
                if (listBlackWhiteListsUsingGetRequest instanceof ListBlackWhiteListsUsingGetRequest) {
                    projectId = listBlackWhiteListsUsingGetRequest.projectId;
                    objectId = listBlackWhiteListsUsingGetRequest.objectId;
                    listType = listBlackWhiteListsUsingGetRequest.listType;
                    limit = listBlackWhiteListsUsingGetRequest.limit;
                    offset = listBlackWhiteListsUsingGetRequest.offset;
                    addressType = listBlackWhiteListsUsingGetRequest.addressType;
                    address = listBlackWhiteListsUsingGetRequest.address;
                    port = listBlackWhiteListsUsingGetRequest.port;
                    enterpriseProjectId = listBlackWhiteListsUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listBlackWhiteListsUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listBlackWhiteListsUsingGetRequest['project_id'];
                    objectId = listBlackWhiteListsUsingGetRequest['object_id'];
                    listType = listBlackWhiteListsUsingGetRequest['list_type'];
                    limit = listBlackWhiteListsUsingGetRequest['limit'];
                    offset = listBlackWhiteListsUsingGetRequest['offset'];
                    addressType = listBlackWhiteListsUsingGetRequest['address_type'];
                    address = listBlackWhiteListsUsingGetRequest['address'];
                    port = listBlackWhiteListsUsingGetRequest['port'];
                    enterpriseProjectId = listBlackWhiteListsUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listBlackWhiteListsUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listBlackWhiteListsUsingGet.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listBlackWhiteListsUsingGet.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (listType === null || listType === undefined) {
                throw new RequiredError('listType','Required parameter listType was null or undefined when calling listBlackWhiteListsUsingGet.');
            }
            if (listType !== null && listType !== undefined) {
                localVarQueryParameter['list_type'] = listType;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listBlackWhiteListsUsingGet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listBlackWhiteListsUsingGet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询dns服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDnsServers(listDnsServersRequest?: ListDnsServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dns/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let limit;
            
            let offset;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (listDnsServersRequest !== null && listDnsServersRequest !== undefined) {
                if (listDnsServersRequest instanceof ListDnsServersRequest) {
                    projectId = listDnsServersRequest.projectId;
                    limit = listDnsServersRequest.limit;
                    offset = listDnsServersRequest.offset;
                    fwInstanceId = listDnsServersRequest.fwInstanceId;
                    enterpriseProjectId = listDnsServersRequest.enterpriseProjectId;
                } else {
                    projectId = listDnsServersRequest['project_id'];
                    limit = listDnsServersRequest['limit'];
                    offset = listDnsServersRequest['offset'];
                    fwInstanceId = listDnsServersRequest['fw_instance_id'];
                    enterpriseProjectId = listDnsServersRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDnsServers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询东西向防火墙信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEastWestFirewall(listEastWestFirewallRequest?: ListEastWestFirewallRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/firewall/east-west",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listEastWestFirewallRequest !== null && listEastWestFirewallRequest !== undefined) {
                if (listEastWestFirewallRequest instanceof ListEastWestFirewallRequest) {
                    projectId = listEastWestFirewallRequest.projectId;
                    limit = listEastWestFirewallRequest.limit;
                    offset = listEastWestFirewallRequest.offset;
                    enterpriseProjectId = listEastWestFirewallRequest.enterpriseProjectId;
                    fwInstanceId = listEastWestFirewallRequest.fwInstanceId;
                } else {
                    projectId = listEastWestFirewallRequest['project_id'];
                    limit = listEastWestFirewallRequest['limit'];
                    offset = listEastWestFirewallRequest['offset'];
                    enterpriseProjectId = listEastWestFirewallRequest['enterprise_project_id'];
                    fwInstanceId = listEastWestFirewallRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEastWestFirewall.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listEastWestFirewall.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listEastWestFirewall.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防火墙实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFirewallUsingGet(listFirewallUsingGetRequest?: ListFirewallUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/firewall/exist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let serviceType;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listFirewallUsingGetRequest !== null && listFirewallUsingGetRequest !== undefined) {
                if (listFirewallUsingGetRequest instanceof ListFirewallUsingGetRequest) {
                    projectId = listFirewallUsingGetRequest.projectId;
                    offset = listFirewallUsingGetRequest.offset;
                    limit = listFirewallUsingGetRequest.limit;
                    serviceType = listFirewallUsingGetRequest.serviceType;
                    enterpriseProjectId = listFirewallUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listFirewallUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listFirewallUsingGetRequest['project_id'];
                    offset = listFirewallUsingGetRequest['offset'];
                    limit = listFirewallUsingGetRequest['limit'];
                    serviceType = listFirewallUsingGetRequest['service_type'];
                    enterpriseProjectId = listFirewallUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listFirewallUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listFirewallUsingGet.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listFirewallUsingGet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listFirewallUsingGet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serviceType === null || serviceType === undefined) {
                throw new RequiredError('serviceType','Required parameter serviceType was null or undefined when calling listFirewallUsingGet.');
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlowLogs(listFlowLogsRequest?: ListFlowLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/flow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let direction;
            
            let logType;
            
            let srcIp;
            
            let srcPort;
            
            let dstIp;
            
            let dstPort;
            
            let protocol;
            
            let app;
            
            let logId;
            
            let nextDate;
            
            let offset;
            
            let enterpriseProjectId;

            if (listFlowLogsRequest !== null && listFlowLogsRequest !== undefined) {
                if (listFlowLogsRequest instanceof ListFlowLogsRequest) {
                    projectId = listFlowLogsRequest.projectId;
                    fwInstanceId = listFlowLogsRequest.fwInstanceId;
                    startTime = listFlowLogsRequest.startTime;
                    endTime = listFlowLogsRequest.endTime;
                    limit = listFlowLogsRequest.limit;
                    direction = listFlowLogsRequest.direction;
                    logType = listFlowLogsRequest.logType;
                    srcIp = listFlowLogsRequest.srcIp;
                    srcPort = listFlowLogsRequest.srcPort;
                    dstIp = listFlowLogsRequest.dstIp;
                    dstPort = listFlowLogsRequest.dstPort;
                    protocol = listFlowLogsRequest.protocol;
                    app = listFlowLogsRequest.app;
                    logId = listFlowLogsRequest.logId;
                    nextDate = listFlowLogsRequest.nextDate;
                    offset = listFlowLogsRequest.offset;
                    enterpriseProjectId = listFlowLogsRequest.enterpriseProjectId;
                } else {
                    projectId = listFlowLogsRequest['project_id'];
                    fwInstanceId = listFlowLogsRequest['fw_instance_id'];
                    startTime = listFlowLogsRequest['start_time'];
                    endTime = listFlowLogsRequest['end_time'];
                    limit = listFlowLogsRequest['limit'];
                    direction = listFlowLogsRequest['direction'];
                    logType = listFlowLogsRequest['log_type'];
                    srcIp = listFlowLogsRequest['src_ip'];
                    srcPort = listFlowLogsRequest['src_port'];
                    dstIp = listFlowLogsRequest['dst_ip'];
                    dstPort = listFlowLogsRequest['dst_port'];
                    protocol = listFlowLogsRequest['protocol'];
                    app = listFlowLogsRequest['app'];
                    logId = listFlowLogsRequest['log_id'];
                    nextDate = listFlowLogsRequest['next_date'];
                    offset = listFlowLogsRequest['offset'];
                    enterpriseProjectId = listFlowLogsRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listFlowLogs.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listFlowLogs.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listFlowLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listFlowLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listFlowLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (srcPort !== null && srcPort !== undefined) {
                localVarQueryParameter['src_port'] = srcPort;
            }
            if (dstIp !== null && dstIp !== undefined) {
                localVarQueryParameter['dst_ip'] = dstIp;
            }
            if (dstPort !== null && dstPort !== undefined) {
                localVarQueryParameter['dst_port'] = dstPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (nextDate !== null && nextDate !== undefined) {
                localVarQueryParameter['next_date'] = nextDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpsProtectModeUsingPost(listIpsProtectModeUsingPostRequest?: ListIpsProtectModeUsingPostRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listIpsProtectModeUsingPostRequest !== null && listIpsProtectModeUsingPostRequest !== undefined) {
                if (listIpsProtectModeUsingPostRequest instanceof ListIpsProtectModeUsingPostRequest) {
                    projectId = listIpsProtectModeUsingPostRequest.projectId;
                    objectId = listIpsProtectModeUsingPostRequest.objectId;
                    enterpriseProjectId = listIpsProtectModeUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = listIpsProtectModeUsingPostRequest.fwInstanceId;
                } else {
                    projectId = listIpsProtectModeUsingPostRequest['project_id'];
                    objectId = listIpsProtectModeUsingPostRequest['object_id'];
                    enterpriseProjectId = listIpsProtectModeUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = listIpsProtectModeUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpsProtectModeUsingPost.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listIpsProtectModeUsingPost.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 测试域名有效性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listParseDomainDetails(listParseDomainDetailsRequest?: ListParseDomainDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain/parse/{domain_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let domainName;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listParseDomainDetailsRequest !== null && listParseDomainDetailsRequest !== undefined) {
                if (listParseDomainDetailsRequest instanceof ListParseDomainDetailsRequest) {
                    projectId = listParseDomainDetailsRequest.projectId;
                    domainName = listParseDomainDetailsRequest.domainName;
                    enterpriseProjectId = listParseDomainDetailsRequest.enterpriseProjectId;
                    fwInstanceId = listParseDomainDetailsRequest.fwInstanceId;
                } else {
                    projectId = listParseDomainDetailsRequest['project_id'];
                    domainName = listParseDomainDetailsRequest['domain_name'];
                    enterpriseProjectId = listParseDomainDetailsRequest['enterprise_project_id'];
                    fwInstanceId = listParseDomainDetailsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listParseDomainDetails.');
            }
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listParseDomainDetails.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取规则击中次数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleHitCount(listRuleHitCountRequest?: ListRuleHitCountRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/acl-rule/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listRuleHitCountRequest !== null && listRuleHitCountRequest !== undefined) {
                if (listRuleHitCountRequest instanceof ListRuleHitCountRequest) {
                    projectId = listRuleHitCountRequest.projectId;
                    enterpriseProjectId = listRuleHitCountRequest.enterpriseProjectId;
                    fwInstanceId = listRuleHitCountRequest.fwInstanceId;
                    body = listRuleHitCountRequest.body
                } else {
                    projectId = listRuleHitCountRequest['project_id'];
                    enterpriseProjectId = listRuleHitCountRequest['enterprise_project_id'];
                    fwInstanceId = listRuleHitCountRequest['fw_instance_id'];
                    body = listRuleHitCountRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listRuleHitCount.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务组成员列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceItemsDetails(listServiceItemsDetailsRequest?: ListServiceItemsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listServiceItemsDetailsRequest !== null && listServiceItemsDetailsRequest !== undefined) {
                if (listServiceItemsDetailsRequest instanceof ListServiceItemsDetailsRequest) {
                    projectId = listServiceItemsDetailsRequest.projectId;
                    setId = listServiceItemsDetailsRequest.setId;
                    limit = listServiceItemsDetailsRequest.limit;
                    offset = listServiceItemsDetailsRequest.offset;
                    keyWord = listServiceItemsDetailsRequest.keyWord;
                    enterpriseProjectId = listServiceItemsDetailsRequest.enterpriseProjectId;
                    fwInstanceId = listServiceItemsDetailsRequest.fwInstanceId;
                } else {
                    projectId = listServiceItemsDetailsRequest['project_id'];
                    setId = listServiceItemsDetailsRequest['set_id'];
                    limit = listServiceItemsDetailsRequest['limit'];
                    offset = listServiceItemsDetailsRequest['offset'];
                    keyWord = listServiceItemsDetailsRequest['key_word'];
                    enterpriseProjectId = listServiceItemsDetailsRequest['enterprise_project_id'];
                    fwInstanceId = listServiceItemsDetailsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listServiceItemsDetails.');
            }
            if (setId === null || setId === undefined) {
                throw new RequiredError('setId','Required parameter setId was null or undefined when calling listServiceItemsDetails.');
            }
            if (setId !== null && setId !== undefined) {
                localVarQueryParameter['set_id'] = setId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listServiceItemsDetails.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listServiceItemsDetails.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取服务组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceSet(listServiceSetRequest?: ListServiceSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listServiceSetRequest !== null && listServiceSetRequest !== undefined) {
                if (listServiceSetRequest instanceof ListServiceSetRequest) {
                    projectId = listServiceSetRequest.projectId;
                    objectId = listServiceSetRequest.objectId;
                    limit = listServiceSetRequest.limit;
                    offset = listServiceSetRequest.offset;
                    keyWord = listServiceSetRequest.keyWord;
                    enterpriseProjectId = listServiceSetRequest.enterpriseProjectId;
                    fwInstanceId = listServiceSetRequest.fwInstanceId;
                } else {
                    projectId = listServiceSetRequest['project_id'];
                    objectId = listServiceSetRequest['object_id'];
                    limit = listServiceSetRequest['limit'];
                    offset = listServiceSetRequest['offset'];
                    keyWord = listServiceSetRequest['key_word'];
                    enterpriseProjectId = listServiceSetRequest['enterprise_project_id'];
                    fwInstanceId = listServiceSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listServiceSet.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listServiceSet.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listServiceSet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listServiceSet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务组细节
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceSetDetails(listServiceSetDetailsRequest?: ListServiceSetDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listServiceSetDetailsRequest !== null && listServiceSetDetailsRequest !== undefined) {
                if (listServiceSetDetailsRequest instanceof ListServiceSetDetailsRequest) {
                    projectId = listServiceSetDetailsRequest.projectId;
                    setId = listServiceSetDetailsRequest.setId;
                    enterpriseProjectId = listServiceSetDetailsRequest.enterpriseProjectId;
                    fwInstanceId = listServiceSetDetailsRequest.fwInstanceId;
                } else {
                    projectId = listServiceSetDetailsRequest['project_id'];
                    setId = listServiceSetDetailsRequest['set_id'];
                    enterpriseProjectId = listServiceSetDetailsRequest['enterprise_project_id'];
                    fwInstanceId = listServiceSetDetailsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listServiceSetDetails.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling listServiceSetDetails.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新地址组信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAddressSetInfoUsingPut(updateAddressSetInfoUsingPutRequest?: UpdateAddressSetInfoUsingPutRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/address-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateAddressSetInfoUsingPutRequest !== null && updateAddressSetInfoUsingPutRequest !== undefined) {
                if (updateAddressSetInfoUsingPutRequest instanceof UpdateAddressSetInfoUsingPutRequest) {
                    projectId = updateAddressSetInfoUsingPutRequest.projectId;
                    setId = updateAddressSetInfoUsingPutRequest.setId;
                    body = updateAddressSetInfoUsingPutRequest.body
                    enterpriseProjectId = updateAddressSetInfoUsingPutRequest.enterpriseProjectId;
                    fwInstanceId = updateAddressSetInfoUsingPutRequest.fwInstanceId;
                } else {
                    projectId = updateAddressSetInfoUsingPutRequest['project_id'];
                    setId = updateAddressSetInfoUsingPutRequest['set_id'];
                    body = updateAddressSetInfoUsingPutRequest['body'];
                    enterpriseProjectId = updateAddressSetInfoUsingPutRequest['enterprise_project_id'];
                    fwInstanceId = updateAddressSetInfoUsingPutRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAddressSetInfoUsingPut.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling updateAddressSetInfoUsingPut.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新黑白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBlackWhiteListUsingPut(updateBlackWhiteListUsingPutRequest?: UpdateBlackWhiteListUsingPutRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/black-white-list/{list_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let listId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateBlackWhiteListUsingPutRequest !== null && updateBlackWhiteListUsingPutRequest !== undefined) {
                if (updateBlackWhiteListUsingPutRequest instanceof UpdateBlackWhiteListUsingPutRequest) {
                    projectId = updateBlackWhiteListUsingPutRequest.projectId;
                    listId = updateBlackWhiteListUsingPutRequest.listId;
                    body = updateBlackWhiteListUsingPutRequest.body
                    enterpriseProjectId = updateBlackWhiteListUsingPutRequest.enterpriseProjectId;
                    fwInstanceId = updateBlackWhiteListUsingPutRequest.fwInstanceId;
                } else {
                    projectId = updateBlackWhiteListUsingPutRequest['project_id'];
                    listId = updateBlackWhiteListUsingPutRequest['list_id'];
                    body = updateBlackWhiteListUsingPutRequest['body'];
                    enterpriseProjectId = updateBlackWhiteListUsingPutRequest['enterprise_project_id'];
                    fwInstanceId = updateBlackWhiteListUsingPutRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateBlackWhiteListUsingPut.');
            }
            if (listId === null || listId === undefined) {
            throw new RequiredError('listId','Required parameter listId was null or undefined when calling updateBlackWhiteListUsingPut.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'list_id': listId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新dns服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDnsServers(updateDnsServersRequest?: UpdateDnsServersRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dns/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (updateDnsServersRequest !== null && updateDnsServersRequest !== undefined) {
                if (updateDnsServersRequest instanceof UpdateDnsServersRequest) {
                    projectId = updateDnsServersRequest.projectId;
                    body = updateDnsServersRequest.body
                    fwInstanceId = updateDnsServersRequest.fwInstanceId;
                    enterpriseProjectId = updateDnsServersRequest.enterpriseProjectId;
                } else {
                    projectId = updateDnsServersRequest['project_id'];
                    body = updateDnsServersRequest['body'];
                    fwInstanceId = updateDnsServersRequest['fw_instance_id'];
                    enterpriseProjectId = updateDnsServersRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateDnsServers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新服务组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServiceSetUsingPut(updateServiceSetUsingPutRequest?: UpdateServiceSetUsingPutRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/service-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateServiceSetUsingPutRequest !== null && updateServiceSetUsingPutRequest !== undefined) {
                if (updateServiceSetUsingPutRequest instanceof UpdateServiceSetUsingPutRequest) {
                    projectId = updateServiceSetUsingPutRequest.projectId;
                    setId = updateServiceSetUsingPutRequest.setId;
                    body = updateServiceSetUsingPutRequest.body
                    enterpriseProjectId = updateServiceSetUsingPutRequest.enterpriseProjectId;
                    fwInstanceId = updateServiceSetUsingPutRequest.fwInstanceId;
                } else {
                    projectId = updateServiceSetUsingPutRequest['project_id'];
                    setId = updateServiceSetUsingPutRequest['set_id'];
                    body = updateServiceSetUsingPutRequest['body'];
                    enterpriseProjectId = updateServiceSetUsingPutRequest['enterprise_project_id'];
                    fwInstanceId = updateServiceSetUsingPutRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateServiceSetUsingPut.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling updateServiceSetUsingPut.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建ACL规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRuleAclUsingPost(addRuleAclUsingPostRequest?: AddRuleAclUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/acl-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addRuleAclUsingPostRequest !== null && addRuleAclUsingPostRequest !== undefined) {
                if (addRuleAclUsingPostRequest instanceof AddRuleAclUsingPostRequest) {
                    projectId = addRuleAclUsingPostRequest.projectId;
                    body = addRuleAclUsingPostRequest.body
                    enterpriseProjectId = addRuleAclUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = addRuleAclUsingPostRequest.fwInstanceId;
                } else {
                    projectId = addRuleAclUsingPostRequest['project_id'];
                    body = addRuleAclUsingPostRequest['body'];
                    enterpriseProjectId = addRuleAclUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = addRuleAclUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addRuleAclUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除ACL规则组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRuleAclUsingDelete(deleteRuleAclUsingDeleteRequest?: DeleteRuleAclUsingDeleteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/acl-rule/{acl_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let aclRuleId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteRuleAclUsingDeleteRequest !== null && deleteRuleAclUsingDeleteRequest !== undefined) {
                if (deleteRuleAclUsingDeleteRequest instanceof DeleteRuleAclUsingDeleteRequest) {
                    projectId = deleteRuleAclUsingDeleteRequest.projectId;
                    aclRuleId = deleteRuleAclUsingDeleteRequest.aclRuleId;
                    enterpriseProjectId = deleteRuleAclUsingDeleteRequest.enterpriseProjectId;
                    fwInstanceId = deleteRuleAclUsingDeleteRequest.fwInstanceId;
                } else {
                    projectId = deleteRuleAclUsingDeleteRequest['project_id'];
                    aclRuleId = deleteRuleAclUsingDeleteRequest['acl_rule_id'];
                    enterpriseProjectId = deleteRuleAclUsingDeleteRequest['enterprise_project_id'];
                    fwInstanceId = deleteRuleAclUsingDeleteRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteRuleAclUsingDelete.');
            }
            if (aclRuleId === null || aclRuleId === undefined) {
            throw new RequiredError('aclRuleId','Required parameter aclRuleId was null or undefined when calling deleteRuleAclUsingDelete.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'acl_rule_id': aclRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ACL防护规则优先级设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleAclUsingPut(listRuleAclUsingPutRequest?: ListRuleAclUsingPutRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/acl-rule/order/{acl_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let aclRuleId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listRuleAclUsingPutRequest !== null && listRuleAclUsingPutRequest !== undefined) {
                if (listRuleAclUsingPutRequest instanceof ListRuleAclUsingPutRequest) {
                    projectId = listRuleAclUsingPutRequest.projectId;
                    aclRuleId = listRuleAclUsingPutRequest.aclRuleId;
                    body = listRuleAclUsingPutRequest.body
                    enterpriseProjectId = listRuleAclUsingPutRequest.enterpriseProjectId;
                    fwInstanceId = listRuleAclUsingPutRequest.fwInstanceId;
                } else {
                    projectId = listRuleAclUsingPutRequest['project_id'];
                    aclRuleId = listRuleAclUsingPutRequest['acl_rule_id'];
                    body = listRuleAclUsingPutRequest['body'];
                    enterpriseProjectId = listRuleAclUsingPutRequest['enterprise_project_id'];
                    fwInstanceId = listRuleAclUsingPutRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listRuleAclUsingPut.');
            }
            if (aclRuleId === null || aclRuleId === undefined) {
            throw new RequiredError('aclRuleId','Required parameter aclRuleId was null or undefined when calling listRuleAclUsingPut.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'acl_rule_id': aclRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleAclsUsingGet(listRuleAclsUsingGetRequest?: ListRuleAclsUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/acl-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let type;
            
            let protocol;
            
            let ip;
            
            let name;
            
            let direction;
            
            let status;
            
            let actionType;
            
            let addressType;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listRuleAclsUsingGetRequest !== null && listRuleAclsUsingGetRequest !== undefined) {
                if (listRuleAclsUsingGetRequest instanceof ListRuleAclsUsingGetRequest) {
                    projectId = listRuleAclsUsingGetRequest.projectId;
                    objectId = listRuleAclsUsingGetRequest.objectId;
                    limit = listRuleAclsUsingGetRequest.limit;
                    offset = listRuleAclsUsingGetRequest.offset;
                    type = listRuleAclsUsingGetRequest.type;
                    protocol = listRuleAclsUsingGetRequest.protocol;
                    ip = listRuleAclsUsingGetRequest.ip;
                    name = listRuleAclsUsingGetRequest.name;
                    direction = listRuleAclsUsingGetRequest.direction;
                    status = listRuleAclsUsingGetRequest.status;
                    actionType = listRuleAclsUsingGetRequest.actionType;
                    addressType = listRuleAclsUsingGetRequest.addressType;
                    enterpriseProjectId = listRuleAclsUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listRuleAclsUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listRuleAclsUsingGetRequest['project_id'];
                    objectId = listRuleAclsUsingGetRequest['object_id'];
                    limit = listRuleAclsUsingGetRequest['limit'];
                    offset = listRuleAclsUsingGetRequest['offset'];
                    type = listRuleAclsUsingGetRequest['type'];
                    protocol = listRuleAclsUsingGetRequest['protocol'];
                    ip = listRuleAclsUsingGetRequest['ip'];
                    name = listRuleAclsUsingGetRequest['name'];
                    direction = listRuleAclsUsingGetRequest['direction'];
                    status = listRuleAclsUsingGetRequest['status'];
                    actionType = listRuleAclsUsingGetRequest['action_type'];
                    addressType = listRuleAclsUsingGetRequest['address_type'];
                    enterpriseProjectId = listRuleAclsUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listRuleAclsUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listRuleAclsUsingGet.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listRuleAclsUsingGet.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listRuleAclsUsingGet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listRuleAclsUsingGet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (actionType !== null && actionType !== undefined) {
                localVarQueryParameter['action_type'] = actionType;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新ACL规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRuleAclUsingPut(updateRuleAclUsingPutRequest?: UpdateRuleAclUsingPutRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/acl-rule/{acl_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let aclRuleId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateRuleAclUsingPutRequest !== null && updateRuleAclUsingPutRequest !== undefined) {
                if (updateRuleAclUsingPutRequest instanceof UpdateRuleAclUsingPutRequest) {
                    projectId = updateRuleAclUsingPutRequest.projectId;
                    aclRuleId = updateRuleAclUsingPutRequest.aclRuleId;
                    body = updateRuleAclUsingPutRequest.body
                    enterpriseProjectId = updateRuleAclUsingPutRequest.enterpriseProjectId;
                    fwInstanceId = updateRuleAclUsingPutRequest.fwInstanceId;
                } else {
                    projectId = updateRuleAclUsingPutRequest['project_id'];
                    aclRuleId = updateRuleAclUsingPutRequest['acl_rule_id'];
                    body = updateRuleAclUsingPutRequest['body'];
                    enterpriseProjectId = updateRuleAclUsingPutRequest['enterprise_project_id'];
                    fwInstanceId = updateRuleAclUsingPutRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateRuleAclUsingPut.');
            }
            if (aclRuleId === null || aclRuleId === undefined) {
            throw new RequiredError('aclRuleId','Required parameter aclRuleId was null or undefined when calling updateRuleAclUsingPut.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'acl_rule_id': aclRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭EIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeProtectEip(changeProtectEipRequest?: ChangeProtectEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/eip/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeProtectEipRequest !== null && changeProtectEipRequest !== undefined) {
                if (changeProtectEipRequest instanceof ChangeProtectEipRequest) {
                    projectId = changeProtectEipRequest.projectId;
                    body = changeProtectEipRequest.body
                    enterpriseProjectId = changeProtectEipRequest.enterpriseProjectId;
                    fwInstanceId = changeProtectEipRequest.fwInstanceId;
                } else {
                    projectId = changeProtectEipRequest['project_id'];
                    body = changeProtectEipRequest['body'];
                    enterpriseProjectId = changeProtectEipRequest['enterprise_project_id'];
                    fwInstanceId = changeProtectEipRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeProtectEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Eip个数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countEips(countEipsRequest?: CountEipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eip-count/{object_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (countEipsRequest !== null && countEipsRequest !== undefined) {
                if (countEipsRequest instanceof CountEipsRequest) {
                    projectId = countEipsRequest.projectId;
                    objectId = countEipsRequest.objectId;
                    enterpriseProjectId = countEipsRequest.enterpriseProjectId;
                    fwInstanceId = countEipsRequest.fwInstanceId;
                } else {
                    projectId = countEipsRequest['project_id'];
                    objectId = countEipsRequest['object_id'];
                    enterpriseProjectId = countEipsRequest['enterprise_project_id'];
                    fwInstanceId = countEipsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling countEips.');
            }
            if (objectId === null || objectId === undefined) {
            throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling countEips.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'object_id': objectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 弹性IP列表查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEipResources(listEipResourcesRequest?: ListEipResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eips/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let status;
            
            let sync;
            
            let enterpriseProjectId;
            
            let deviceKey;
            
            let addressType;
            
            let fwInstanceId;
            
            let fwKeyWord;
            
            let epsId;

            if (listEipResourcesRequest !== null && listEipResourcesRequest !== undefined) {
                if (listEipResourcesRequest instanceof ListEipResourcesRequest) {
                    projectId = listEipResourcesRequest.projectId;
                    objectId = listEipResourcesRequest.objectId;
                    limit = listEipResourcesRequest.limit;
                    offset = listEipResourcesRequest.offset;
                    keyWord = listEipResourcesRequest.keyWord;
                    status = listEipResourcesRequest.status;
                    sync = listEipResourcesRequest.sync;
                    enterpriseProjectId = listEipResourcesRequest.enterpriseProjectId;
                    deviceKey = listEipResourcesRequest.deviceKey;
                    addressType = listEipResourcesRequest.addressType;
                    fwInstanceId = listEipResourcesRequest.fwInstanceId;
                    fwKeyWord = listEipResourcesRequest.fwKeyWord;
                    epsId = listEipResourcesRequest.epsId;
                } else {
                    projectId = listEipResourcesRequest['project_id'];
                    objectId = listEipResourcesRequest['object_id'];
                    limit = listEipResourcesRequest['limit'];
                    offset = listEipResourcesRequest['offset'];
                    keyWord = listEipResourcesRequest['key_word'];
                    status = listEipResourcesRequest['status'];
                    sync = listEipResourcesRequest['sync'];
                    enterpriseProjectId = listEipResourcesRequest['enterprise_project_id'];
                    deviceKey = listEipResourcesRequest['device_key'];
                    addressType = listEipResourcesRequest['address_type'];
                    fwInstanceId = listEipResourcesRequest['fw_instance_id'];
                    fwKeyWord = listEipResourcesRequest['fw_key_word'];
                    epsId = listEipResourcesRequest['eps_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEipResources.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listEipResources.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listEipResources.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listEipResources.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sync !== null && sync !== undefined) {
                localVarQueryParameter['sync'] = sync;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (deviceKey !== null && deviceKey !== undefined) {
                localVarQueryParameter['device_key'] = deviceKey;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (fwKeyWord !== null && fwKeyWord !== undefined) {
                localVarQueryParameter['fw_key_word'] = fwKeyWord;
            }
            if (epsId !== null && epsId !== undefined) {
                localVarQueryParameter['eps_id'] = epsId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换开关状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIpsSwitchUsingPost(changeIpsSwitchUsingPostRequest?: ChangeIpsSwitchUsingPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ips/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeIpsSwitchUsingPostRequest !== null && changeIpsSwitchUsingPostRequest !== undefined) {
                if (changeIpsSwitchUsingPostRequest instanceof ChangeIpsSwitchUsingPostRequest) {
                    projectId = changeIpsSwitchUsingPostRequest.projectId;
                    body = changeIpsSwitchUsingPostRequest.body
                    enterpriseProjectId = changeIpsSwitchUsingPostRequest.enterpriseProjectId;
                    fwInstanceId = changeIpsSwitchUsingPostRequest.fwInstanceId;
                } else {
                    projectId = changeIpsSwitchUsingPostRequest['project_id'];
                    body = changeIpsSwitchUsingPostRequest['body'];
                    enterpriseProjectId = changeIpsSwitchUsingPostRequest['enterprise_project_id'];
                    fwInstanceId = changeIpsSwitchUsingPostRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeIpsSwitchUsingPost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IPS特性开关状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpsSwitchStatusUsingGet(listIpsSwitchStatusUsingGetRequest?: ListIpsSwitchStatusUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listIpsSwitchStatusUsingGetRequest !== null && listIpsSwitchStatusUsingGetRequest !== undefined) {
                if (listIpsSwitchStatusUsingGetRequest instanceof ListIpsSwitchStatusUsingGetRequest) {
                    projectId = listIpsSwitchStatusUsingGetRequest.projectId;
                    objectId = listIpsSwitchStatusUsingGetRequest.objectId;
                    enterpriseProjectId = listIpsSwitchStatusUsingGetRequest.enterpriseProjectId;
                    fwInstanceId = listIpsSwitchStatusUsingGetRequest.fwInstanceId;
                } else {
                    projectId = listIpsSwitchStatusUsingGetRequest['project_id'];
                    objectId = listIpsSwitchStatusUsingGetRequest['object_id'];
                    enterpriseProjectId = listIpsSwitchStatusUsingGetRequest['enterprise_project_id'];
                    fwInstanceId = listIpsSwitchStatusUsingGetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpsSwitchStatusUsingGet.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listIpsSwitchStatusUsingGet.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护vpc信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcProtects(listVpcProtectsRequest?: ListVpcProtectsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpcs/protection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listVpcProtectsRequest !== null && listVpcProtectsRequest !== undefined) {
                if (listVpcProtectsRequest instanceof ListVpcProtectsRequest) {
                    projectId = listVpcProtectsRequest.projectId;
                    objectId = listVpcProtectsRequest.objectId;
                    enterpriseProjectId = listVpcProtectsRequest.enterpriseProjectId;
                    fwInstanceId = listVpcProtectsRequest.fwInstanceId;
                } else {
                    projectId = listVpcProtectsRequest['project_id'];
                    objectId = listVpcProtectsRequest['object_id'];
                    enterpriseProjectId = listVpcProtectsRequest['enterprise_project_id'];
                    fwInstanceId = listVpcProtectsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listVpcProtects.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listVpcProtects.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CfwClient {
    return new CfwClient(client);
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