import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ASICAcceleratorInfo } from './model/ASICAcceleratorInfo';
import { Absolute } from './model/Absolute';
import { AddServerNicsReq } from './model/AddServerNicsReq';
import { AddServerNicsRequest } from './model/AddServerNicsRequest';
import { AddServerNicsResponse } from './model/AddServerNicsResponse';
import { Address } from './model/Address';
import { AddressInfo } from './model/AddressInfo';
import { Addresses } from './model/Addresses';
import { AttachBaremetalServerVolumeRequest } from './model/AttachBaremetalServerVolumeRequest';
import { AttachBaremetalServerVolumeResponse } from './model/AttachBaremetalServerVolumeResponse';
import { AttachVolumeBody } from './model/AttachVolumeBody';
import { BandWidth } from './model/BandWidth';
import { BaremetalServerTag } from './model/BaremetalServerTag';
import { BatchCreateBaremetalServerTagsRequest } from './model/BatchCreateBaremetalServerTagsRequest';
import { BatchCreateBaremetalServerTagsRequestBody } from './model/BatchCreateBaremetalServerTagsRequestBody';
import { BatchCreateBaremetalServerTagsResponse } from './model/BatchCreateBaremetalServerTagsResponse';
import { BatchDeleteBaremetalServerTagsRequest } from './model/BatchDeleteBaremetalServerTagsRequest';
import { BatchDeleteBaremetalServerTagsRequestBody } from './model/BatchDeleteBaremetalServerTagsRequestBody';
import { BatchDeleteBaremetalServerTagsResponse } from './model/BatchDeleteBaremetalServerTagsResponse';
import { BatchRebootBaremetalServersRequest } from './model/BatchRebootBaremetalServersRequest';
import { BatchRebootBaremetalServersResponse } from './model/BatchRebootBaremetalServersResponse';
import { BatchStartBaremetalServersRequest } from './model/BatchStartBaremetalServersRequest';
import { BatchStartBaremetalServersResponse } from './model/BatchStartBaremetalServersResponse';
import { BatchStopBaremetalServersRequest } from './model/BatchStopBaremetalServersRequest';
import { BatchStopBaremetalServersResponse } from './model/BatchStopBaremetalServersResponse';
import { ChangeBaremetalNameBody } from './model/ChangeBaremetalNameBody';
import { ChangeBaremetalNameResponsesServers } from './model/ChangeBaremetalNameResponsesServers';
import { ChangeBaremetalNameServer } from './model/ChangeBaremetalNameServer';
import { ChangeBaremetalServerNameRequest } from './model/ChangeBaremetalServerNameRequest';
import { ChangeBaremetalServerNameResponse } from './model/ChangeBaremetalServerNameResponse';
import { ChangeBaremetalServerOsRequest } from './model/ChangeBaremetalServerOsRequest';
import { ChangeBaremetalServerOsResponse } from './model/ChangeBaremetalServerOsResponse';
import { CreateBareMetalServersRequest } from './model/CreateBareMetalServersRequest';
import { CreateBareMetalServersResponse } from './model/CreateBareMetalServersResponse';
import { CreateBaremetalServersBody } from './model/CreateBaremetalServersBody';
import { CreateSchedulerHints } from './model/CreateSchedulerHints';
import { CreateServerNicAllowedAddressPairs } from './model/CreateServerNicAllowedAddressPairs';
import { CreateServers } from './model/CreateServers';
import { DataVolumes } from './model/DataVolumes';
import { DataVolumesMetadata } from './model/DataVolumesMetadata';
import { DeleteBaremetalBody } from './model/DeleteBaremetalBody';
import { DeleteBaremetalServerRequest } from './model/DeleteBaremetalServerRequest';
import { DeleteBaremetalServerResponse } from './model/DeleteBaremetalServerResponse';
import { DeleteServerNicsReq } from './model/DeleteServerNicsReq';
import { DeleteServerNicsRequest } from './model/DeleteServerNicsRequest';
import { DeleteServerNicsResponse } from './model/DeleteServerNicsResponse';
import { DeleteWindowsBareMetalServerPasswordRequest } from './model/DeleteWindowsBareMetalServerPasswordRequest';
import { DeleteWindowsBareMetalServerPasswordResponse } from './model/DeleteWindowsBareMetalServerPasswordResponse';
import { DetachBaremetalServerVolumeRequest } from './model/DetachBaremetalServerVolumeRequest';
import { DetachBaremetalServerVolumeResponse } from './model/DetachBaremetalServerVolumeResponse';
import { Eip } from './model/Eip';
import { Entitie } from './model/Entitie';
import { Entities } from './model/Entities';
import { ExtendParam } from './model/ExtendParam';
import { ExtendParamEip } from './model/ExtendParamEip';
import { Fault } from './model/Fault';
import { FixedIps } from './model/FixedIps';
import { FlavorDetailInfos } from './model/FlavorDetailInfos';
import { FlavorInfo } from './model/FlavorInfo';
import { FlavorInfos } from './model/FlavorInfos';
import { FlavorsResp } from './model/FlavorsResp';
import { GpuInfo } from './model/GpuInfo';
import { Image } from './model/Image';
import { ImageInfo } from './model/ImageInfo';
import { InterfaceAttachments } from './model/InterfaceAttachments';
import { InterfaceAttachmentsReq } from './model/InterfaceAttachmentsReq';
import { Links } from './model/Links';
import { LinksInfo } from './model/LinksInfo';
import { ListBareMetalServerDetailsRequest } from './model/ListBareMetalServerDetailsRequest';
import { ListBareMetalServerDetailsResponse } from './model/ListBareMetalServerDetailsResponse';
import { ListBareMetalServersDetailRequest } from './model/ListBareMetalServersDetailRequest';
import { ListBareMetalServersDetailResponse } from './model/ListBareMetalServersDetailResponse';
import { ListBareMetalServersRequest } from './model/ListBareMetalServersRequest';
import { ListBareMetalServersResponse } from './model/ListBareMetalServersResponse';
import { ListBaremetalFlavorDetailExtendsRequest } from './model/ListBaremetalFlavorDetailExtendsRequest';
import { ListBaremetalFlavorDetailExtendsResponse } from './model/ListBaremetalFlavorDetailExtendsResponse';
import { MetaDataInfo } from './model/MetaDataInfo';
import { MetadataInfos } from './model/MetadataInfos';
import { MetadataInstall } from './model/MetadataInstall';
import { MetadataList } from './model/MetadataList';
import { Nics } from './model/Nics';
import { OSChangeReq } from './model/OSChangeReq';
import { OsChange } from './model/OsChange';
import { OsExtendedVolumes } from './model/OsExtendedVolumes';
import { OsExtendedVolumesInfo } from './model/OsExtendedVolumesInfo';
import { OsExtraSpecs } from './model/OsExtraSpecs';
import { OsReinstall } from './model/OsReinstall';
import { OsReinstallBody } from './model/OsReinstallBody';
import { OsStartBody } from './model/OsStartBody';
import { OsStopBody } from './model/OsStopBody';
import { OsStopBodyType } from './model/OsStopBodyType';
import { PublicIp } from './model/PublicIp';
import { RebootBody } from './model/RebootBody';
import { ReinstallBaremetalServerOsRequest } from './model/ReinstallBaremetalServerOsRequest';
import { ReinstallBaremetalServerOsResponse } from './model/ReinstallBaremetalServerOsResponse';
import { RemoteConsole } from './model/RemoteConsole';
import { ResetPassword } from './model/ResetPassword';
import { ResetPasswordBody } from './model/ResetPasswordBody';
import { ResetPwdOneClickRequest } from './model/ResetPwdOneClickRequest';
import { ResetPwdOneClickResponse } from './model/ResetPwdOneClickResponse';
import { RootVolume } from './model/RootVolume';
import { RootVolumeMetadata } from './model/RootVolumeMetadata';
import { SchedulerHints } from './model/SchedulerHints';
import { SecurityGroupInfo } from './model/SecurityGroupInfo';
import { SecurityGroups } from './model/SecurityGroups';
import { SecurityGroupsInfo } from './model/SecurityGroupsInfo';
import { SecurityGroupsList } from './model/SecurityGroupsList';
import { ServerDetails } from './model/ServerDetails';
import { ServerListDetails } from './model/ServerListDetails';
import { ServerNics } from './model/ServerNics';
import { ServerNicsReq } from './model/ServerNicsReq';
import { ServerOsSchedulerHints } from './model/ServerOsSchedulerHints';
import { ServerRemoteConsole } from './model/ServerRemoteConsole';
import { ServersInfoType } from './model/ServersInfoType';
import { ServersList } from './model/ServersList';
import { ShowBaremetalServerInterfaceAttachmentsRequest } from './model/ShowBaremetalServerInterfaceAttachmentsRequest';
import { ShowBaremetalServerInterfaceAttachmentsResponse } from './model/ShowBaremetalServerInterfaceAttachmentsResponse';
import { ShowBaremetalServerTagsRequest } from './model/ShowBaremetalServerTagsRequest';
import { ShowBaremetalServerTagsResponse } from './model/ShowBaremetalServerTagsResponse';
import { ShowBaremetalServerVolumeInfoRequest } from './model/ShowBaremetalServerVolumeInfoRequest';
import { ShowBaremetalServerVolumeInfoResponse } from './model/ShowBaremetalServerVolumeInfoResponse';
import { ShowJobInfosRequest } from './model/ShowJobInfosRequest';
import { ShowJobInfosResponse } from './model/ShowJobInfosResponse';
import { ShowResetPwdRequest } from './model/ShowResetPwdRequest';
import { ShowResetPwdResponse } from './model/ShowResetPwdResponse';
import { ShowServerRemoteConsoleReq } from './model/ShowServerRemoteConsoleReq';
import { ShowServerRemoteConsoleRequest } from './model/ShowServerRemoteConsoleRequest';
import { ShowServerRemoteConsoleResponse } from './model/ShowServerRemoteConsoleResponse';
import { ShowSpecifiedVersionRequest } from './model/ShowSpecifiedVersionRequest';
import { ShowSpecifiedVersionResponse } from './model/ShowSpecifiedVersionResponse';
import { ShowTenantQuotaRequest } from './model/ShowTenantQuotaRequest';
import { ShowTenantQuotaResponse } from './model/ShowTenantQuotaResponse';
import { ShowWindowsBaremetalServerPwdRequest } from './model/ShowWindowsBaremetalServerPwdRequest';
import { ShowWindowsBaremetalServerPwdResponse } from './model/ShowWindowsBaremetalServerPwdResponse';
import { StartServersInfo } from './model/StartServersInfo';
import { SubJobs } from './model/SubJobs';
import { SystemTags } from './model/SystemTags';
import { UpdateBaremetalServerInterfaceAttachmentsReq } from './model/UpdateBaremetalServerInterfaceAttachmentsReq';
import { UpdateBaremetalServerInterfaceAttachmentsRequest } from './model/UpdateBaremetalServerInterfaceAttachmentsRequest';
import { UpdateBaremetalServerInterfaceAttachmentsResponse } from './model/UpdateBaremetalServerInterfaceAttachmentsResponse';
import { UpdateBaremetalServerMetadataReq } from './model/UpdateBaremetalServerMetadataReq';
import { UpdateBaremetalServerMetadataRequest } from './model/UpdateBaremetalServerMetadataRequest';
import { UpdateBaremetalServerMetadataResponse } from './model/UpdateBaremetalServerMetadataResponse';
import { VersionLinks } from './model/VersionLinks';
import { Versions } from './model/Versions';
import { VolumeAttachment } from './model/VolumeAttachment';
import { VolumeAttachments } from './model/VolumeAttachments';

export class BmsClient {
    public static newBuilder(): ClientBuilder<BmsClient> {
            let client = new ClientBuilder<BmsClient>(newClient);
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
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 裸金属服务器绑定弹性网卡
     * @param {string} serverId 
     * @param {AddServerNicsReq} addServerNicsReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServerNics(addServerNicsRequest?: AddServerNicsRequest): Promise<AddServerNicsResponse> {
        const options = ParamCreater().addServerNics(addServerNicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 裸金属服务器创建成功后，如果发现磁盘不够用或者当前磁盘不满足要求，可以将已有云硬盘挂载给裸金属服务器，作为数据盘使用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 裸金属服务器挂载云硬盘
     * @param {string} serverId 裸金属服务器ID
     * @param {AttachVolumeBody} attachVolume 裸金属服务器挂载云硬盘接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachBaremetalServerVolume(attachBaremetalServerVolumeRequest?: AttachBaremetalServerVolumeRequest): Promise<AttachBaremetalServerVolumeResponse> {
        const options = ParamCreater().attachBaremetalServerVolume(attachBaremetalServerVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定裸金属服务器批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加裸金属服务器标签
     * @param {string} serverId 裸金属服务器ID。
     * @param {BatchCreateBaremetalServerTagsRequestBody} batchCreateBaremetalServerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateBaremetalServerTags(batchCreateBaremetalServerTagsRequest?: BatchCreateBaremetalServerTagsRequest): Promise<BatchCreateBaremetalServerTagsResponse> {
        const options = ParamCreater().batchCreateBaremetalServerTags(batchCreateBaremetalServerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定云服务器批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除裸金属服务器标签
     * @param {string} serverId 
     * @param {BatchDeleteBaremetalServerTagsRequestBody} batchDeleteBaremetalServerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteBaremetalServerTags(batchDeleteBaremetalServerTagsRequest?: BatchDeleteBaremetalServerTagsRequest): Promise<BatchDeleteBaremetalServerTagsResponse> {
        const options = ParamCreater().batchDeleteBaremetalServerTags(batchDeleteBaremetalServerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据给定的裸金属服务器ID列表，批量重启裸金属服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启裸金属服务器
     * @param {RebootBody} rebootBody 重启裸金属服务器接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRebootBaremetalServers(batchRebootBaremetalServersRequest?: BatchRebootBaremetalServersRequest): Promise<BatchRebootBaremetalServersResponse> {
        const options = ParamCreater().batchRebootBaremetalServers(batchRebootBaremetalServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据给定的裸金属服务器ID列表，批量启动裸金属服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动裸金属服务器
     * @param {OsStartBody} osStartBody 启动裸金属服务器接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStartBaremetalServers(batchStartBaremetalServersRequest?: BatchStartBaremetalServersRequest): Promise<BatchStartBaremetalServersResponse> {
        const options = ParamCreater().batchStartBaremetalServers(batchStartBaremetalServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据给定的裸金属服务器ID列表，批量关闭裸金属服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭裸金属服务器
     * @param {OsStopBody} osStopBody 关闭裸金属服务器接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopBaremetalServers(batchStopBaremetalServersRequest?: BatchStopBaremetalServersRequest): Promise<BatchStopBaremetalServersResponse> {
        const options = ParamCreater().batchStopBaremetalServers(batchStopBaremetalServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改裸金属服务器名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改裸金属服务器名称
     * @param {string} serverId 裸金属服务器ID
     * @param {ChangeBaremetalNameBody} changeBaremetalNameBody 修改裸金属服务器名称接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeBaremetalServerName(changeBaremetalServerNameRequest?: ChangeBaremetalServerNameRequest): Promise<ChangeBaremetalServerNameResponse> {
        const options = ParamCreater().changeBaremetalServerName(changeBaremetalServerNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换裸金属服务器的操作系统。切换操作系统支持密码或者密钥注入，该接口支持企业项目细粒度权限的校验，具体细粒度请参见 bms:servers:changeOS
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换裸金属服务器的操作系统
     * @param {string} serverId 裸金属服务器ID
     * @param {OSChangeReq} oSChangeReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeBaremetalServerOs(changeBaremetalServerOsRequest?: ChangeBaremetalServerOsRequest): Promise<ChangeBaremetalServerOsResponse> {
        const options = ParamCreater().changeBaremetalServerOs(changeBaremetalServerOsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一台或多台裸金属服务器,裸金属服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建裸金属服务器
     * @param {CreateBaremetalServersBody} createBaremetalServersBody 创建裸金属服务器接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBareMetalServers(createBareMetalServersRequest?: CreateBareMetalServersRequest): Promise<CreateBareMetalServersResponse> {
        const options = ParamCreater().createBareMetalServers(createBareMetalServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除裸金属服务器裸金属服务器物理机
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除裸金属服务器裸金属服务器物理机
     * @param {DeleteBaremetalBody} deleteBaremetalBody 删除裸金属服务器接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBaremetalServer(deleteBaremetalServerRequest?: DeleteBaremetalServerRequest): Promise<DeleteBaremetalServerResponse> {
        const options = ParamCreater().deleteBaremetalServer(deleteBaremetalServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 裸金属服务器解绑弹性网卡
     * @param {string} serverId 
     * @param {DeleteServerNicsReq} [deleteServerNicsReq] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerNics(deleteServerNicsRequest?: DeleteServerNicsRequest): Promise<DeleteServerNicsResponse> {
        const options = ParamCreater().deleteServerNics(deleteServerNicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清除Windows裸金属服务器初始安装时系统生成的密码记录。清除密码后，不影响裸金属服务器密码登录功能，但不能再使用获取密码功能来查询该裸金属服务器密码。如果裸金属服务器是通过私有镜像创建的，请确保已安装Cloudbase-init。公共镜像默认已安装该软件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Windows裸金属服务器清除密码
     * @param {string} serverId 裸金属服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWindowsBareMetalServerPassword(deleteWindowsBareMetalServerPasswordRequest?: DeleteWindowsBareMetalServerPasswordRequest): Promise<DeleteWindowsBareMetalServerPasswordResponse> {
        const options = ParamCreater().deleteWindowsBareMetalServerPassword(deleteWindowsBareMetalServerPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将挂载至裸金属服务器中的磁盘卸载；对于挂载在系统盘盘位（也就是“/dev/sda”挂载点）上的磁盘，不允许执行卸载操作；对于挂载在数据盘盘位（非“/dev/sda”挂载点）上的磁盘，支持离线卸载和在线卸载（裸金属服务器处于“运行中”状态）磁盘
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 裸金属服务器卸载云磁盘
     * @param {string} serverId 裸金属服务器ID
     * @param {string} attachmentId 裸金属服务器的云磁盘ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachBaremetalServerVolume(detachBaremetalServerVolumeRequest?: DetachBaremetalServerVolumeRequest): Promise<DetachBaremetalServerVolumeResponse> {
        const options = ParamCreater().detachBaremetalServerVolume(detachBaremetalServerVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取裸金属服务器详细信息，该接口支持查询裸金属服务器的计费方式，以及是否被冻结
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询裸金属服务器详情
     * @param {string} serverId 裸金属服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBareMetalServerDetails(listBareMetalServerDetailsRequest?: ListBareMetalServerDetailsRequest): Promise<ListBareMetalServerDetailsResponse> {
        const options = ParamCreater().listBareMetalServerDetails(listBareMetalServerDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户根据设置的请求条件筛选裸金属服务器，并获取裸金属服务器的详细信息。该接口支持查询裸金属服务器计费方式，以及是否被冻结。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询裸金属服务器详情列表
     * @param {string} [flavor] 裸金属服务器规格ID
     * @param {string} [name] 裸金属服务器名称
     * @param {string} [status] 裸金属服务器状态,只有管理员可以使用DELETED状态过滤查询已经删除的裸金属服务器。取值范围：ACTIVE、BUILD、ERROR、HARD_REBOOT、REBOOT、REBUILD、SHUTOFF
     * @param {number} [limit] 每页返回裸金属服务器的条数，默认值是25，最大值为1000。limit为每页返回裸金属服务器详情的条数
     * @param {number} [offset] 此接口为分页查询接口，offset为查询页码（起始页码为1），返回值包括总条数和裸金属服务器详情列表。传入offset：按limit值分页（limit默认为1000），返回第offset页裸金属服务器详情列表和总条数，总条数最大值为limit，不足按实际情况返回。不传入offset，传入limit：返回裸金属服务器详情列表和总条数，总条数最大值为limit，不足按实际情况返回。不传入offset，不传入limit：按25条分页，返回第1页裸金属服务器详情列表，总条数最大值为25，不足按实际情况返回。
     * @param {string} [tags] 裸金属服务器标签：__type_baremetal
     * @param {string} [reservationId] 批量创建裸金属服务器时，指定返回的ID，用于查询本次批量创建的裸金属服务器
     * @param {string} [detail] 查询裸金属服务器结果的详细级别，级别越高，查询到的裸金属服务器信息越多，默认为4。可使用的级别为 1，2，3，4
     * @param {string} [enterpriseProjectId] 查询绑定某个企业项目的裸金属服务器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBareMetalServers(listBareMetalServersRequest?: ListBareMetalServersRequest): Promise<ListBareMetalServersResponse> {
        const options = ParamCreater().listBareMetalServers(listBareMetalServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户根据设置的请求条件筛选裸金属服务器，并获取裸金属服务器的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询裸金属服务器列表
     * @param {string} [flavor] 裸金属服务器规格ID
     * @param {string} [name] 裸金属服务器名称
     * @param {string} [status] 裸金属服务器状态,只有管理员可以使用DELETED状态过滤查询已经删除的裸金属服务器。取值范围：ACTIVE、BUILD、ERROR、HARD_REBOOT、REBOOT、REBUILD、SHUTOFF
     * @param {number} [limit] 每页返回裸金属服务器的条数，默认值是25，最大值为1000。limit为每页返回裸金属服务器详情的条数
     * @param {number} [offset] 此接口为分页查询接口，offset为查询页码（起始页码为1），返回值包括总条数和裸金属服务器详情列表。传入offset：按limit值分页（limit默认为1000），返回第offset页裸金属服务器详情列表和总条数，总条数最大值为limit，不足按实际情况返回。不传入offset，传入limit：返回裸金属服务器详情列表和总条数，总条数最大值为limit，不足按实际情况返回。不传入offset，不传入limit：按25条分页，返回第1页裸金属服务器详情列表，总条数最大值为25，不足按实际情况返回。
     * @param {string} [detail] 查询裸金属服务器结果的详细级别，级别越高，查询到的裸金属服务器信息越多，默认为4。可使用的级别为 1，2，3，4
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBareMetalServersDetail(listBareMetalServersDetailRequest?: ListBareMetalServersDetailRequest): Promise<ListBareMetalServersDetailResponse> {
        const options = ParamCreater().listBareMetalServersDetail(listBareMetalServersDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询裸金属服务器的规格详情和规格的扩展信息。您可以调用此接口查询“baremetal:extBootType”参数取值，以确认某个规格是否支持快速发放
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格详情和规格扩展信息列表
     * @param {string} [availabilityZone] 可用区，需要指定可用区（AZ）的名称。请参考地区和终端节点获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBaremetalFlavorDetailExtends(listBaremetalFlavorDetailExtendsRequest?: ListBaremetalFlavorDetailExtendsRequest): Promise<ListBaremetalFlavorDetailExtendsResponse> {
        const options = ParamCreater().listBaremetalFlavorDetailExtends(listBaremetalFlavorDetailExtendsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重装裸金属服务器的操作系统。快速发放裸金属服务器支持裸金属服务器数据盘不变的情况下，使用原镜像重装系统盘。重装操作系统支持密码或者密钥注入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重装裸金属服务器操作系统
     * @param {string} serverId 裸金属服务器ID
     * @param {OsReinstallBody} osReinstallBody 重装裸金属服务器操作系统接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reinstallBaremetalServerOs(reinstallBaremetalServerOsRequest?: ReinstallBaremetalServerOsRequest): Promise<ReinstallBaremetalServerOsResponse> {
        const options = ParamCreater().reinstallBaremetalServerOs(reinstallBaremetalServerOsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在裸金属服务器支持一键重置密码功能的前提下，重置裸金属服务器管理帐号（root用户或Administrator用户）的密码。可以通过6.10.1-查询是否支持一键重置密码API查询是否支持一键重置密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 一键重置裸金属服务器密码
     * @param {string} serverId 裸金属服务器ID。可以从裸金属服务器控制台查询，或者通过调用7.3.4-查询裸金属服务器列表（OpenStack原生）API获取。
     * @param {ResetPasswordBody} resetPasswordBody 一键重置裸金属服务器密码接口请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPwdOneClick(resetPwdOneClickRequest?: ResetPwdOneClickRequest): Promise<ResetPwdOneClickResponse> {
        const options = ParamCreater().resetPwdOneClick(resetPwdOneClickRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询裸金属服务器的网卡信息，比如网卡的IP地址、MAC地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询裸金属服务器网卡信息
     * @param {string} serverId 裸金属服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBaremetalServerInterfaceAttachments(showBaremetalServerInterfaceAttachmentsRequest?: ShowBaremetalServerInterfaceAttachmentsRequest): Promise<ShowBaremetalServerInterfaceAttachmentsResponse> {
        const options = ParamCreater().showBaremetalServerInterfaceAttachments(showBaremetalServerInterfaceAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询指定云服务器的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询裸金属服务器标签
     * @param {string} serverId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBaremetalServerTags(showBaremetalServerTagsRequest?: ShowBaremetalServerTagsRequest): Promise<ShowBaremetalServerTagsResponse> {
        const options = ParamCreater().showBaremetalServerTags(showBaremetalServerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询裸金属服务器挂载的磁盘信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询裸金属服务器挂载的云硬盘信息
     * @param {string} serverId 裸金属服务器ID。可以从裸金属服务器控制台查询，或者通过调用7.3.4-查询裸金属服务器列表（OpenStack原生）API获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBaremetalServerVolumeInfo(showBaremetalServerVolumeInfoRequest?: ShowBaremetalServerVolumeInfoRequest): Promise<ShowBaremetalServerVolumeInfoResponse> {
        const options = ParamCreater().showBaremetalServerVolumeInfo(showBaremetalServerVolumeInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询是否支持一键重置密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询是否支持一键重置密码
     * @param {string} serverId 裸金属服务器ID。可以从裸金属服务器控制台查询，或者通过调用7.3.4-查询裸金属服务器列表（OpenStack原生）API获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResetPwd(showResetPwdRequest?: ShowResetPwdRequest): Promise<ShowResetPwdResponse> {
        const options = ParamCreater().showResetPwd(showResetPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取裸金属服务器远程登录地址
     * @param {string} serverId 
     * @param {ShowServerRemoteConsoleReq} showServerRemoteConsoleReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerRemoteConsole(showServerRemoteConsoleRequest?: ShowServerRemoteConsoleRequest): Promise<ShowServerRemoteConsoleResponse> {
        const options = ParamCreater().showServerRemoteConsole(showServerRemoteConsoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询该租户下，所有资源的配额信息，包括已使用配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTenantQuota(showTenantQuotaRequest?: ShowTenantQuotaRequest): Promise<ShowTenantQuotaResponse> {
        const options = ParamCreater().showTenantQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Windows裸金属服务器初始安装时系统生成的管理员帐户（Administrator帐户或Cloudbase-init设置的帐户）随机密码。如果裸金属服务器是通过私有镜像创建的，请确保已安装Cloudbase-init。公共镜像默认已安装该软件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Windows裸金属服务器获取密码
     * @param {string} serverId 裸金属服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWindowsBaremetalServerPwd(showWindowsBaremetalServerPwdRequest?: ShowWindowsBaremetalServerPwdRequest): Promise<ShowWindowsBaremetalServerPwdResponse> {
        const options = ParamCreater().showWindowsBaremetalServerPwd(showWindowsBaremetalServerPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改裸金属服务器弹性网卡的属性
     * @param {string} portId 
     * @param {string} serverId 
     * @param {UpdateBaremetalServerInterfaceAttachmentsReq} updateBaremetalServerInterfaceAttachmentsReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBaremetalServerInterfaceAttachments(updateBaremetalServerInterfaceAttachmentsRequest?: UpdateBaremetalServerInterfaceAttachmentsRequest): Promise<UpdateBaremetalServerInterfaceAttachmentsResponse> {
        const options = ParamCreater().updateBaremetalServerInterfaceAttachments(updateBaremetalServerInterfaceAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新裸金属服务器元数据。如果元数据中没有待更新字段，则自动添加该字段。如果元数据中已存在待更新字段，则直接更新字段值；如果元数据中的字段不再请求参数中，则保持不变
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新裸金属服务器元数据
     * @param {string} serverId 裸金属服务器ID
     * @param {UpdateBaremetalServerMetadataReq} updateBaremetalServerMetadataReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBaremetalServerMetadata(updateBaremetalServerMetadataRequest?: UpdateBaremetalServerMetadataRequest): Promise<UpdateBaremetalServerMetadataResponse> {
        const options = ParamCreater().updateBaremetalServerMetadata(updateBaremetalServerMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询裸金属服务指定接口版本的信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定API版本信息
     * @param {string} apiVersion API版本号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpecifiedVersion(showSpecifiedVersionRequest?: ShowSpecifiedVersionRequest): Promise<ShowSpecifiedVersionResponse> {
        const options = ParamCreater().showSpecifiedVersion(showSpecifiedVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job的执行状态。对于创建裸金属服务器物理机、挂卸卷等异步API，命令下发后，会返回job_id，通过job_id可以查询任务的执行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Job状态
     * @param {string} jobId Job ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobInfos(showJobInfosRequest?: ShowJobInfosRequest): Promise<ShowJobInfosResponse> {
        const options = ParamCreater().showJobInfos(showJobInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addServerNics(addServerNicsRequest?: AddServerNicsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/nics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (addServerNicsRequest !== null && addServerNicsRequest !== undefined) {
                if (addServerNicsRequest instanceof AddServerNicsRequest) {
                    serverId = addServerNicsRequest.serverId;
                    body = addServerNicsRequest.body
                } else {
                    serverId = addServerNicsRequest['server_id'];
                    body = addServerNicsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling addServerNics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 裸金属服务器创建成功后，如果发现磁盘不够用或者当前磁盘不满足要求，可以将已有云硬盘挂载给裸金属服务器，作为数据盘使用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachBaremetalServerVolume(attachBaremetalServerVolumeRequest?: AttachBaremetalServerVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/attachvolume",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (attachBaremetalServerVolumeRequest !== null && attachBaremetalServerVolumeRequest !== undefined) {
                if (attachBaremetalServerVolumeRequest instanceof AttachBaremetalServerVolumeRequest) {
                    serverId = attachBaremetalServerVolumeRequest.serverId;
                    body = attachBaremetalServerVolumeRequest.body
                } else {
                    serverId = attachBaremetalServerVolumeRequest['server_id'];
                    body = attachBaremetalServerVolumeRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling attachBaremetalServerVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定裸金属服务器批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateBaremetalServerTags(batchCreateBaremetalServerTagsRequest?: BatchCreateBaremetalServerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (batchCreateBaremetalServerTagsRequest !== null && batchCreateBaremetalServerTagsRequest !== undefined) {
                if (batchCreateBaremetalServerTagsRequest instanceof BatchCreateBaremetalServerTagsRequest) {
                    serverId = batchCreateBaremetalServerTagsRequest.serverId;
                    body = batchCreateBaremetalServerTagsRequest.body
                } else {
                    serverId = batchCreateBaremetalServerTagsRequest['server_id'];
                    body = batchCreateBaremetalServerTagsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchCreateBaremetalServerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定云服务器批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteBaremetalServerTags(batchDeleteBaremetalServerTagsRequest?: BatchDeleteBaremetalServerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (batchDeleteBaremetalServerTagsRequest !== null && batchDeleteBaremetalServerTagsRequest !== undefined) {
                if (batchDeleteBaremetalServerTagsRequest instanceof BatchDeleteBaremetalServerTagsRequest) {
                    serverId = batchDeleteBaremetalServerTagsRequest.serverId;
                    body = batchDeleteBaremetalServerTagsRequest.body
                } else {
                    serverId = batchDeleteBaremetalServerTagsRequest['server_id'];
                    body = batchDeleteBaremetalServerTagsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchDeleteBaremetalServerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据给定的裸金属服务器ID列表，批量重启裸金属服务器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRebootBaremetalServers(batchRebootBaremetalServersRequest?: BatchRebootBaremetalServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRebootBaremetalServersRequest !== null && batchRebootBaremetalServersRequest !== undefined) {
                if (batchRebootBaremetalServersRequest instanceof BatchRebootBaremetalServersRequest) {
                    body = batchRebootBaremetalServersRequest.body
                } else {
                    body = batchRebootBaremetalServersRequest['body'];
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
         * 根据给定的裸金属服务器ID列表，批量启动裸金属服务器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStartBaremetalServers(batchStartBaremetalServersRequest?: BatchStartBaremetalServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStartBaremetalServersRequest !== null && batchStartBaremetalServersRequest !== undefined) {
                if (batchStartBaremetalServersRequest instanceof BatchStartBaremetalServersRequest) {
                    body = batchStartBaremetalServersRequest.body
                } else {
                    body = batchStartBaremetalServersRequest['body'];
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
         * 根据给定的裸金属服务器ID列表，批量关闭裸金属服务器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopBaremetalServers(batchStopBaremetalServersRequest?: BatchStopBaremetalServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStopBaremetalServersRequest !== null && batchStopBaremetalServersRequest !== undefined) {
                if (batchStopBaremetalServersRequest instanceof BatchStopBaremetalServersRequest) {
                    body = batchStopBaremetalServersRequest.body
                } else {
                    body = batchStopBaremetalServersRequest['body'];
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
         * 修改裸金属服务器名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeBaremetalServerName(changeBaremetalServerNameRequest?: ChangeBaremetalServerNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/baremetalservers/{server_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeBaremetalServerNameRequest !== null && changeBaremetalServerNameRequest !== undefined) {
                if (changeBaremetalServerNameRequest instanceof ChangeBaremetalServerNameRequest) {
                    serverId = changeBaremetalServerNameRequest.serverId;
                    body = changeBaremetalServerNameRequest.body
                } else {
                    serverId = changeBaremetalServerNameRequest['server_id'];
                    body = changeBaremetalServerNameRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeBaremetalServerName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换裸金属服务器的操作系统。切换操作系统支持密码或者密钥注入，该接口支持企业项目细粒度权限的校验，具体细粒度请参见 bms:servers:changeOS
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeBaremetalServerOs(changeBaremetalServerOsRequest?: ChangeBaremetalServerOsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/changeos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeBaremetalServerOsRequest !== null && changeBaremetalServerOsRequest !== undefined) {
                if (changeBaremetalServerOsRequest instanceof ChangeBaremetalServerOsRequest) {
                    serverId = changeBaremetalServerOsRequest.serverId;
                    body = changeBaremetalServerOsRequest.body
                } else {
                    serverId = changeBaremetalServerOsRequest['server_id'];
                    body = changeBaremetalServerOsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeBaremetalServerOs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一台或多台裸金属服务器,裸金属服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBareMetalServers(createBareMetalServersRequest?: CreateBareMetalServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createBareMetalServersRequest !== null && createBareMetalServersRequest !== undefined) {
                if (createBareMetalServersRequest instanceof CreateBareMetalServersRequest) {
                    body = createBareMetalServersRequest.body
                } else {
                    body = createBareMetalServersRequest['body'];
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
         * 删除裸金属服务器裸金属服务器物理机
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBaremetalServer(deleteBaremetalServerRequest?: DeleteBaremetalServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteBaremetalServerRequest !== null && deleteBaremetalServerRequest !== undefined) {
                if (deleteBaremetalServerRequest instanceof DeleteBaremetalServerRequest) {
                    body = deleteBaremetalServerRequest.body
                } else {
                    body = deleteBaremetalServerRequest['body'];
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerNics(deleteServerNicsRequest?: DeleteServerNicsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/nics/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (deleteServerNicsRequest !== null && deleteServerNicsRequest !== undefined) {
                if (deleteServerNicsRequest instanceof DeleteServerNicsRequest) {
                    serverId = deleteServerNicsRequest.serverId;
                    body = deleteServerNicsRequest.body
                } else {
                    serverId = deleteServerNicsRequest['server_id'];
                    body = deleteServerNicsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteServerNics.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 清除Windows裸金属服务器初始安装时系统生成的密码记录。清除密码后，不影响裸金属服务器密码登录功能，但不能再使用获取密码功能来查询该裸金属服务器密码。如果裸金属服务器是通过私有镜像创建的，请确保已安装Cloudbase-init。公共镜像默认已安装该软件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWindowsBareMetalServerPassword(deleteWindowsBareMetalServerPasswordRequest?: DeleteWindowsBareMetalServerPasswordRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-server-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (deleteWindowsBareMetalServerPasswordRequest !== null && deleteWindowsBareMetalServerPasswordRequest !== undefined) {
                if (deleteWindowsBareMetalServerPasswordRequest instanceof DeleteWindowsBareMetalServerPasswordRequest) {
                    serverId = deleteWindowsBareMetalServerPasswordRequest.serverId;
                } else {
                    serverId = deleteWindowsBareMetalServerPasswordRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteWindowsBareMetalServerPassword.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将挂载至裸金属服务器中的磁盘卸载；对于挂载在系统盘盘位（也就是“/dev/sda”挂载点）上的磁盘，不允许执行卸载操作；对于挂载在数据盘盘位（非“/dev/sda”挂载点）上的磁盘，支持离线卸载和在线卸载（裸金属服务器处于“运行中”状态）磁盘
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachBaremetalServerVolume(detachBaremetalServerVolumeRequest?: DetachBaremetalServerVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/baremetalservers/{server_id}/detachvolume/{attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;
            
            let attachmentId;

            if (detachBaremetalServerVolumeRequest !== null && detachBaremetalServerVolumeRequest !== undefined) {
                if (detachBaremetalServerVolumeRequest instanceof DetachBaremetalServerVolumeRequest) {
                    serverId = detachBaremetalServerVolumeRequest.serverId;
                    attachmentId = detachBaremetalServerVolumeRequest.attachmentId;
                } else {
                    serverId = detachBaremetalServerVolumeRequest['server_id'];
                    attachmentId = detachBaremetalServerVolumeRequest['attachment_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling detachBaremetalServerVolume.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling detachBaremetalServerVolume.');
            }

            options.pathParams = { 'server_id': serverId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取裸金属服务器详细信息，该接口支持查询裸金属服务器的计费方式，以及是否被冻结
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBareMetalServerDetails(listBareMetalServerDetailsRequest?: ListBareMetalServerDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (listBareMetalServerDetailsRequest !== null && listBareMetalServerDetailsRequest !== undefined) {
                if (listBareMetalServerDetailsRequest instanceof ListBareMetalServerDetailsRequest) {
                    serverId = listBareMetalServerDetailsRequest.serverId;
                } else {
                    serverId = listBareMetalServerDetailsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listBareMetalServerDetails.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户根据设置的请求条件筛选裸金属服务器，并获取裸金属服务器的详细信息。该接口支持查询裸金属服务器计费方式，以及是否被冻结。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBareMetalServers(listBareMetalServersRequest?: ListBareMetalServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavor;
            
            let name;
            
            let status;
            
            let limit;
            
            let offset;
            
            let tags;
            
            let reservationId;
            
            let detail;
            
            let enterpriseProjectId;

            if (listBareMetalServersRequest !== null && listBareMetalServersRequest !== undefined) {
                if (listBareMetalServersRequest instanceof ListBareMetalServersRequest) {
                    flavor = listBareMetalServersRequest.flavor;
                    name = listBareMetalServersRequest.name;
                    status = listBareMetalServersRequest.status;
                    limit = listBareMetalServersRequest.limit;
                    offset = listBareMetalServersRequest.offset;
                    tags = listBareMetalServersRequest.tags;
                    reservationId = listBareMetalServersRequest.reservationId;
                    detail = listBareMetalServersRequest.detail;
                    enterpriseProjectId = listBareMetalServersRequest.enterpriseProjectId;
                } else {
                    flavor = listBareMetalServersRequest['flavor'];
                    name = listBareMetalServersRequest['name'];
                    status = listBareMetalServersRequest['status'];
                    limit = listBareMetalServersRequest['limit'];
                    offset = listBareMetalServersRequest['offset'];
                    tags = listBareMetalServersRequest['tags'];
                    reservationId = listBareMetalServersRequest['reservation_id'];
                    detail = listBareMetalServersRequest['detail'];
                    enterpriseProjectId = listBareMetalServersRequest['enterprise_project_id'];
                }
            }

        
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
            if (reservationId !== null && reservationId !== undefined) {
                localVarQueryParameter['reservation_id'] = reservationId;
            }
            if (detail !== null && detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户根据设置的请求条件筛选裸金属服务器，并获取裸金属服务器的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBareMetalServersDetail(listBareMetalServersDetailRequest?: ListBareMetalServersDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/baremetalservers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavor;
            
            let name;
            
            let status;
            
            let limit;
            
            let offset;
            
            let detail;

            if (listBareMetalServersDetailRequest !== null && listBareMetalServersDetailRequest !== undefined) {
                if (listBareMetalServersDetailRequest instanceof ListBareMetalServersDetailRequest) {
                    flavor = listBareMetalServersDetailRequest.flavor;
                    name = listBareMetalServersDetailRequest.name;
                    status = listBareMetalServersDetailRequest.status;
                    limit = listBareMetalServersDetailRequest.limit;
                    offset = listBareMetalServersDetailRequest.offset;
                    detail = listBareMetalServersDetailRequest.detail;
                } else {
                    flavor = listBareMetalServersDetailRequest['flavor'];
                    name = listBareMetalServersDetailRequest['name'];
                    status = listBareMetalServersDetailRequest['status'];
                    limit = listBareMetalServersDetailRequest['limit'];
                    offset = listBareMetalServersDetailRequest['offset'];
                    detail = listBareMetalServersDetailRequest['detail'];
                }
            }

        
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (detail !== null && detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询裸金属服务器的规格详情和规格的扩展信息。您可以调用此接口查询“baremetal:extBootType”参数取值，以确认某个规格是否支持快速发放
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBaremetalFlavorDetailExtends(listBaremetalFlavorDetailExtendsRequest?: ListBaremetalFlavorDetailExtendsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZone;

            if (listBaremetalFlavorDetailExtendsRequest !== null && listBaremetalFlavorDetailExtendsRequest !== undefined) {
                if (listBaremetalFlavorDetailExtendsRequest instanceof ListBaremetalFlavorDetailExtendsRequest) {
                    availabilityZone = listBaremetalFlavorDetailExtendsRequest.availabilityZone;
                } else {
                    availabilityZone = listBaremetalFlavorDetailExtendsRequest['availability_zone'];
                }
            }

        
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重装裸金属服务器的操作系统。快速发放裸金属服务器支持裸金属服务器数据盘不变的情况下，使用原镜像重装系统盘。重装操作系统支持密码或者密钥注入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        reinstallBaremetalServerOs(reinstallBaremetalServerOsRequest?: ReinstallBaremetalServerOsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/reinstallos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (reinstallBaremetalServerOsRequest !== null && reinstallBaremetalServerOsRequest !== undefined) {
                if (reinstallBaremetalServerOsRequest instanceof ReinstallBaremetalServerOsRequest) {
                    serverId = reinstallBaremetalServerOsRequest.serverId;
                    body = reinstallBaremetalServerOsRequest.body
                } else {
                    serverId = reinstallBaremetalServerOsRequest['server_id'];
                    body = reinstallBaremetalServerOsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling reinstallBaremetalServerOs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在裸金属服务器支持一键重置密码功能的前提下，重置裸金属服务器管理帐号（root用户或Administrator用户）的密码。可以通过6.10.1-查询是否支持一键重置密码API查询是否支持一键重置密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwdOneClick(resetPwdOneClickRequest?: ResetPwdOneClickRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-reset-password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (resetPwdOneClickRequest !== null && resetPwdOneClickRequest !== undefined) {
                if (resetPwdOneClickRequest instanceof ResetPwdOneClickRequest) {
                    serverId = resetPwdOneClickRequest.serverId;
                    body = resetPwdOneClickRequest.body
                } else {
                    serverId = resetPwdOneClickRequest['server_id'];
                    body = resetPwdOneClickRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resetPwdOneClick.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询裸金属服务器的网卡信息，比如网卡的IP地址、MAC地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBaremetalServerInterfaceAttachments(showBaremetalServerInterfaceAttachmentsRequest?: ShowBaremetalServerInterfaceAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-interface",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showBaremetalServerInterfaceAttachmentsRequest !== null && showBaremetalServerInterfaceAttachmentsRequest !== undefined) {
                if (showBaremetalServerInterfaceAttachmentsRequest instanceof ShowBaremetalServerInterfaceAttachmentsRequest) {
                    serverId = showBaremetalServerInterfaceAttachmentsRequest.serverId;
                } else {
                    serverId = showBaremetalServerInterfaceAttachmentsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showBaremetalServerInterfaceAttachments.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询指定云服务器的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBaremetalServerTags(showBaremetalServerTagsRequest?: ShowBaremetalServerTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/{server_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showBaremetalServerTagsRequest !== null && showBaremetalServerTagsRequest !== undefined) {
                if (showBaremetalServerTagsRequest instanceof ShowBaremetalServerTagsRequest) {
                    serverId = showBaremetalServerTagsRequest.serverId;
                } else {
                    serverId = showBaremetalServerTagsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showBaremetalServerTags.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询裸金属服务器挂载的磁盘信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBaremetalServerVolumeInfo(showBaremetalServerVolumeInfoRequest?: ShowBaremetalServerVolumeInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-volume_attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showBaremetalServerVolumeInfoRequest !== null && showBaremetalServerVolumeInfoRequest !== undefined) {
                if (showBaremetalServerVolumeInfoRequest instanceof ShowBaremetalServerVolumeInfoRequest) {
                    serverId = showBaremetalServerVolumeInfoRequest.serverId;
                } else {
                    serverId = showBaremetalServerVolumeInfoRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showBaremetalServerVolumeInfo.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询是否支持一键重置密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResetPwd(showResetPwdRequest?: ShowResetPwdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-resetpwd-flag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showResetPwdRequest !== null && showResetPwdRequest !== undefined) {
                if (showResetPwdRequest instanceof ShowResetPwdRequest) {
                    serverId = showResetPwdRequest.serverId;
                } else {
                    serverId = showResetPwdRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showResetPwd.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerRemoteConsole(showServerRemoteConsoleRequest?: ShowServerRemoteConsoleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/remote_console",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (showServerRemoteConsoleRequest !== null && showServerRemoteConsoleRequest !== undefined) {
                if (showServerRemoteConsoleRequest instanceof ShowServerRemoteConsoleRequest) {
                    serverId = showServerRemoteConsoleRequest.serverId;
                    body = showServerRemoteConsoleRequest.body
                } else {
                    serverId = showServerRemoteConsoleRequest['server_id'];
                    body = showServerRemoteConsoleRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerRemoteConsole.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询该租户下，所有资源的配额信息，包括已使用配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTenantQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/limits",
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
         * 获取Windows裸金属服务器初始安装时系统生成的管理员帐户（Administrator帐户或Cloudbase-init设置的帐户）随机密码。如果裸金属服务器是通过私有镜像创建的，请确保已安装Cloudbase-init。公共镜像默认已安装该软件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWindowsBaremetalServerPwd(showWindowsBaremetalServerPwdRequest?: ShowWindowsBaremetalServerPwdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-server-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showWindowsBaremetalServerPwdRequest !== null && showWindowsBaremetalServerPwdRequest !== undefined) {
                if (showWindowsBaremetalServerPwdRequest instanceof ShowWindowsBaremetalServerPwdRequest) {
                    serverId = showWindowsBaremetalServerPwdRequest.serverId;
                } else {
                    serverId = showWindowsBaremetalServerPwdRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showWindowsBaremetalServerPwd.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBaremetalServerInterfaceAttachments(updateBaremetalServerInterfaceAttachmentsRequest?: UpdateBaremetalServerInterfaceAttachmentsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/baremetalservers/{server_id}/os-interface/{port_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;
            
            let serverId;

            if (updateBaremetalServerInterfaceAttachmentsRequest !== null && updateBaremetalServerInterfaceAttachmentsRequest !== undefined) {
                if (updateBaremetalServerInterfaceAttachmentsRequest instanceof UpdateBaremetalServerInterfaceAttachmentsRequest) {
                    portId = updateBaremetalServerInterfaceAttachmentsRequest.portId;
                    serverId = updateBaremetalServerInterfaceAttachmentsRequest.serverId;
                    body = updateBaremetalServerInterfaceAttachmentsRequest.body
                } else {
                    portId = updateBaremetalServerInterfaceAttachmentsRequest['port_id'];
                    serverId = updateBaremetalServerInterfaceAttachmentsRequest['server_id'];
                    body = updateBaremetalServerInterfaceAttachmentsRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling updateBaremetalServerInterfaceAttachments.');
            }
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateBaremetalServerInterfaceAttachments.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId,'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新裸金属服务器元数据。如果元数据中没有待更新字段，则自动添加该字段。如果元数据中已存在待更新字段，则直接更新字段值；如果元数据中的字段不再请求参数中，则保持不变
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBaremetalServerMetadata(updateBaremetalServerMetadataRequest?: UpdateBaremetalServerMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/baremetalservers/{server_id}/metadata",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateBaremetalServerMetadataRequest !== null && updateBaremetalServerMetadataRequest !== undefined) {
                if (updateBaremetalServerMetadataRequest instanceof UpdateBaremetalServerMetadataRequest) {
                    serverId = updateBaremetalServerMetadataRequest.serverId;
                    body = updateBaremetalServerMetadataRequest.body
                } else {
                    serverId = updateBaremetalServerMetadataRequest['server_id'];
                    body = updateBaremetalServerMetadataRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateBaremetalServerMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询裸金属服务指定接口版本的信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpecifiedVersion(showSpecifiedVersionRequest?: ShowSpecifiedVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let apiVersion;

            if (showSpecifiedVersionRequest !== null && showSpecifiedVersionRequest !== undefined) {
                if (showSpecifiedVersionRequest instanceof ShowSpecifiedVersionRequest) {
                    apiVersion = showSpecifiedVersionRequest.apiVersion;
                } else {
                    apiVersion = showSpecifiedVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling showSpecifiedVersion.');
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。对于创建裸金属服务器物理机、挂卸卷等异步API，命令下发后，会返回job_id，通过job_id可以查询任务的执行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobInfos(showJobInfosRequest?: ShowJobInfosRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobInfosRequest !== null && showJobInfosRequest !== undefined) {
                if (showJobInfosRequest instanceof ShowJobInfosRequest) {
                    jobId = showJobInfosRequest.jobId;
                } else {
                    jobId = showJobInfosRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobInfos.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): BmsClient {
    return new BmsClient(client);
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