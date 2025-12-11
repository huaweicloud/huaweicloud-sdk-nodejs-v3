import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddImageMemberRequest } from './model/AddImageMemberRequest';
import { AddImageMemberRequestBody } from './model/AddImageMemberRequestBody';
import { AddImageMemberResponse } from './model/AddImageMemberResponse';
import { Address } from './model/Address';
import { Bandwidth } from './model/Bandwidth';
import { BatchCreateTagsRequest } from './model/BatchCreateTagsRequest';
import { BatchCreateTagsRequestBody } from './model/BatchCreateTagsRequestBody';
import { BatchCreateTagsResponse } from './model/BatchCreateTagsResponse';
import { BatchDeleteTagsRequest } from './model/BatchDeleteTagsRequest';
import { BatchDeleteTagsRequestBody } from './model/BatchDeleteTagsRequestBody';
import { BatchDeleteTagsResponse } from './model/BatchDeleteTagsResponse';
import { BatchExportCloudPhoneDataRequest } from './model/BatchExportCloudPhoneDataRequest';
import { BatchExportCloudPhoneDataRequestBody } from './model/BatchExportCloudPhoneDataRequestBody';
import { BatchExportCloudPhoneDataResponse } from './model/BatchExportCloudPhoneDataResponse';
import { BatchImportCloudPhoneDataRequest } from './model/BatchImportCloudPhoneDataRequest';
import { BatchImportCloudPhoneDataRequestBody } from './model/BatchImportCloudPhoneDataRequestBody';
import { BatchImportCloudPhoneDataResponse } from './model/BatchImportCloudPhoneDataResponse';
import { BatchShowPhoneConnectInfosRequest } from './model/BatchShowPhoneConnectInfosRequest';
import { BatchShowPhoneConnectInfosResponse } from './model/BatchShowPhoneConnectInfosResponse';
import { ChangeCloudPhoneServerModelRequest } from './model/ChangeCloudPhoneServerModelRequest';
import { ChangeCloudPhoneServerModelRequestBody } from './model/ChangeCloudPhoneServerModelRequestBody';
import { ChangeCloudPhoneServerModelRequestBodyExtendParam } from './model/ChangeCloudPhoneServerModelRequestBodyExtendParam';
import { ChangeCloudPhoneServerModelResponse } from './model/ChangeCloudPhoneServerModelResponse';
import { ChangeCloudPhoneServerRequest } from './model/ChangeCloudPhoneServerRequest';
import { ChangeCloudPhoneServerRequestBody } from './model/ChangeCloudPhoneServerRequestBody';
import { ChangeCloudPhoneServerRequestBodyBandWidth } from './model/ChangeCloudPhoneServerRequestBodyBandWidth';
import { ChangeCloudPhoneServerRequestBodyExtendParam } from './model/ChangeCloudPhoneServerRequestBodyExtendParam';
import { ChangeCloudPhoneServerRequestBodyPhoneDataVolume } from './model/ChangeCloudPhoneServerRequestBodyPhoneDataVolume';
import { ChangeCloudPhoneServerRequestBodyPublicIp } from './model/ChangeCloudPhoneServerRequestBodyPublicIp';
import { ChangeCloudPhoneServerRequestBodyServerShareDataVolume } from './model/ChangeCloudPhoneServerRequestBodyServerShareDataVolume';
import { ChangeCloudPhoneServerResponse } from './model/ChangeCloudPhoneServerResponse';
import { ConnectErrorInfo } from './model/ConnectErrorInfo';
import { ConnectInfo } from './model/ConnectInfo';
import { ConnectInfoAccessInfo } from './model/ConnectInfoAccessInfo';
import { ConnectionRequestBody } from './model/ConnectionRequestBody';
import { CreateCloudPhoneSingleServerRequest } from './model/CreateCloudPhoneSingleServerRequest';
import { CreateCloudPhoneSingleServerRequestBody } from './model/CreateCloudPhoneSingleServerRequestBody';
import { CreateCloudPhoneSingleServerRequestBodyDataVolume } from './model/CreateCloudPhoneSingleServerRequestBodyDataVolume';
import { CreateCloudPhoneSingleServerRequestBodyOrderParam } from './model/CreateCloudPhoneSingleServerRequestBodyOrderParam';
import { CreateCloudPhoneSingleServerRequestBodyPublicIp } from './model/CreateCloudPhoneSingleServerRequestBodyPublicIp';
import { CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth } from './model/CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth';
import { CreateCloudPhoneSingleServerResponse } from './model/CreateCloudPhoneSingleServerResponse';
import { CreateNet2CloudPhoneServerRequest } from './model/CreateNet2CloudPhoneServerRequest';
import { CreateNet2CloudPhoneServerRequestBody } from './model/CreateNet2CloudPhoneServerRequestBody';
import { CreateNet2CloudPhoneServerRequestBodyBandWidth } from './model/CreateNet2CloudPhoneServerRequestBodyBandWidth';
import { CreateNet2CloudPhoneServerRequestBodyExtendParam } from './model/CreateNet2CloudPhoneServerRequestBodyExtendParam';
import { CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume } from './model/CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume';
import { CreateNet2CloudPhoneServerRequestBodyPublicIp } from './model/CreateNet2CloudPhoneServerRequestBodyPublicIp';
import { CreateNet2CloudPhoneServerRequestBodyPublicIpEip } from './model/CreateNet2CloudPhoneServerRequestBodyPublicIpEip';
import { CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume } from './model/CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume';
import { CreateNet2CloudPhoneServerResponse } from './model/CreateNet2CloudPhoneServerResponse';
import { DeleteCloudPhoneServerRequest } from './model/DeleteCloudPhoneServerRequest';
import { DeleteCloudPhoneServerRequestBody } from './model/DeleteCloudPhoneServerRequestBody';
import { DeleteCloudPhoneServerResponse } from './model/DeleteCloudPhoneServerResponse';
import { DeleteImageMemberRequest } from './model/DeleteImageMemberRequest';
import { DeleteImageMemberResponse } from './model/DeleteImageMemberResponse';
import { DeleteImageRequest } from './model/DeleteImageRequest';
import { DeleteImageResponse } from './model/DeleteImageResponse';
import { DeleteShareAppsRequest } from './model/DeleteShareAppsRequest';
import { DeleteShareAppsRequestBody } from './model/DeleteShareAppsRequestBody';
import { DeleteShareAppsResponse } from './model/DeleteShareAppsResponse';
import { DeleteShareFilesRequest } from './model/DeleteShareFilesRequest';
import { DeleteShareFilesRequestBody } from './model/DeleteShareFilesRequestBody';
import { DeleteShareFilesResponse } from './model/DeleteShareFilesResponse';
import { EncodeServer } from './model/EncodeServer';
import { EncodeServerAccessInfo } from './model/EncodeServerAccessInfo';
import { EncodeServerJob } from './model/EncodeServerJob';
import { ExpandPhoneDataVolumeSizeRequest } from './model/ExpandPhoneDataVolumeSizeRequest';
import { ExpandPhoneDataVolumeSizeRequestBody } from './model/ExpandPhoneDataVolumeSizeRequestBody';
import { ExpandPhoneDataVolumeSizeResponse } from './model/ExpandPhoneDataVolumeSizeResponse';
import { ImportTrafficRequest } from './model/ImportTrafficRequest';
import { ImportTrafficRequestBody } from './model/ImportTrafficRequestBody';
import { ImportTrafficResponse } from './model/ImportTrafficResponse';
import { InstallApkRequest } from './model/InstallApkRequest';
import { InstallApkRequestBody } from './model/InstallApkRequestBody';
import { InstallApkResponse } from './model/InstallApkResponse';
import { Job } from './model/Job';
import { ListCloudPhoneImagesRequest } from './model/ListCloudPhoneImagesRequest';
import { ListCloudPhoneImagesResponse } from './model/ListCloudPhoneImagesResponse';
import { ListCloudPhoneModelsRequest } from './model/ListCloudPhoneModelsRequest';
import { ListCloudPhoneModelsResponse } from './model/ListCloudPhoneModelsResponse';
import { ListCloudPhoneServerModelsRequest } from './model/ListCloudPhoneServerModelsRequest';
import { ListCloudPhoneServerModelsResponse } from './model/ListCloudPhoneServerModelsResponse';
import { ListCloudPhoneServersRequest } from './model/ListCloudPhoneServersRequest';
import { ListCloudPhoneServersResponse } from './model/ListCloudPhoneServersResponse';
import { ListCloudPhonesRequest } from './model/ListCloudPhonesRequest';
import { ListCloudPhonesResponse } from './model/ListCloudPhonesResponse';
import { ListEncodeServersRequest } from './model/ListEncodeServersRequest';
import { ListEncodeServersResponse } from './model/ListEncodeServersResponse';
import { ListImageMembersRequest } from './model/ListImageMembersRequest';
import { ListImageMembersResponse } from './model/ListImageMembersResponse';
import { ListImageMembersView } from './model/ListImageMembersView';
import { ListImagesRequest } from './model/ListImagesRequest';
import { ListImagesResponse } from './model/ListImagesResponse';
import { ListImagesView } from './model/ListImagesView';
import { ListJobsRequest } from './model/ListJobsRequest';
import { ListJobsResponse } from './model/ListJobsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesRequestBody } from './model/ListResourceInstancesRequestBody';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListResourceTagsRequest } from './model/ListResourceTagsRequest';
import { ListResourceTagsResponse } from './model/ListResourceTagsResponse';
import { ListShareFilesRequest } from './model/ListShareFilesRequest';
import { ListShareFilesResponse } from './model/ListShareFilesResponse';
import { Match } from './model/Match';
import { Nic } from './model/Nic';
import { NicForSingleServer } from './model/NicForSingleServer';
import { NicIpv6Bandwidth } from './model/NicIpv6Bandwidth';
import { Phone } from './model/Phone';
import { PhoneAccessInfo } from './model/PhoneAccessInfo';
import { PhoneDataVolume } from './model/PhoneDataVolume';
import { PhoneDataVolumeSize } from './model/PhoneDataVolumeSize';
import { PhoneImage } from './model/PhoneImage';
import { PhoneJob } from './model/PhoneJob';
import { PhoneMetadata } from './model/PhoneMetadata';
import { PhoneModel } from './model/PhoneModel';
import { PhoneProperty } from './model/PhoneProperty';
import { Port } from './model/Port';
import { PropertyToUpdate } from './model/PropertyToUpdate';
import { PushFileRequest } from './model/PushFileRequest';
import { PushFileRequestBody } from './model/PushFileRequestBody';
import { PushFileResponse } from './model/PushFileResponse';
import { PushShareAppsRequest } from './model/PushShareAppsRequest';
import { PushShareAppsRequestBody } from './model/PushShareAppsRequestBody';
import { PushShareAppsResponse } from './model/PushShareAppsResponse';
import { PushShareFilesRequest } from './model/PushShareFilesRequest';
import { PushShareFilesRequestBody } from './model/PushShareFilesRequestBody';
import { PushShareFilesResponse } from './model/PushShareFilesResponse';
import { ResetCloudPhoneRequest } from './model/ResetCloudPhoneRequest';
import { ResetCloudPhoneRequestBody } from './model/ResetCloudPhoneRequestBody';
import { ResetCloudPhoneResponse } from './model/ResetCloudPhoneResponse';
import { Resource } from './model/Resource';
import { RestartCloudPhoneRequest } from './model/RestartCloudPhoneRequest';
import { RestartCloudPhoneRequestBody } from './model/RestartCloudPhoneRequestBody';
import { RestartCloudPhoneResponse } from './model/RestartCloudPhoneResponse';
import { RestartCloudPhoneServerRequest } from './model/RestartCloudPhoneServerRequest';
import { RestartCloudPhoneServerRequestBody } from './model/RestartCloudPhoneServerRequestBody';
import { RestartCloudPhoneServerResponse } from './model/RestartCloudPhoneServerResponse';
import { RestartEncodeServerRequest } from './model/RestartEncodeServerRequest';
import { RestartEncodeServerRequestBody } from './model/RestartEncodeServerRequestBody';
import { RestartEncodeServerResponse } from './model/RestartEncodeServerResponse';
import { RestoreInfo } from './model/RestoreInfo';
import { RunShellCommandRequest } from './model/RunShellCommandRequest';
import { RunShellCommandRequestBody } from './model/RunShellCommandRequestBody';
import { RunShellCommandResponse } from './model/RunShellCommandResponse';
import { RunSyncCommandJob } from './model/RunSyncCommandJob';
import { RunSyncCommandRequest } from './model/RunSyncCommandRequest';
import { RunSyncCommandRequestBody } from './model/RunSyncCommandRequestBody';
import { RunSyncCommandResponse } from './model/RunSyncCommandResponse';
import { Server } from './model/Server';
import { ServerJob } from './model/ServerJob';
import { ServerKeypair } from './model/ServerKeypair';
import { ServerMetadata } from './model/ServerMetadata';
import { ServerModel } from './model/ServerModel';
import { ServerModelExtendSpec } from './model/ServerModelExtendSpec';
import { ServerModelExtendSpecOsVolume } from './model/ServerModelExtendSpecOsVolume';
import { ShowBandwidthDetailRequest } from './model/ShowBandwidthDetailRequest';
import { ShowBandwidthDetailResponse } from './model/ShowBandwidthDetailResponse';
import { ShowCloudPhoneDetailRequest } from './model/ShowCloudPhoneDetailRequest';
import { ShowCloudPhoneDetailResponse } from './model/ShowCloudPhoneDetailResponse';
import { ShowCloudPhoneDetailResponseBodyMetadata } from './model/ShowCloudPhoneDetailResponseBodyMetadata';
import { ShowCloudPhoneServerDetailRequest } from './model/ShowCloudPhoneServerDetailRequest';
import { ShowCloudPhoneServerDetailResponse } from './model/ShowCloudPhoneServerDetailResponse';
import { ShowCloudPhoneServerDetailResponseBodyMetadata } from './model/ShowCloudPhoneServerDetailResponseBodyMetadata';
import { ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo } from './model/ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { StopCloudPhoneRequest } from './model/StopCloudPhoneRequest';
import { StopCloudPhoneRequestBody } from './model/StopCloudPhoneRequestBody';
import { StopCloudPhoneResponse } from './model/StopCloudPhoneResponse';
import { StorageInfo } from './model/StorageInfo';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { UninstallApkRequest } from './model/UninstallApkRequest';
import { UninstallApkRequestBody } from './model/UninstallApkRequestBody';
import { UninstallApkResponse } from './model/UninstallApkResponse';
import { UpdateBandwidthRequest } from './model/UpdateBandwidthRequest';
import { UpdateBandwidthRequestBody } from './model/UpdateBandwidthRequestBody';
import { UpdateBandwidthResponse } from './model/UpdateBandwidthResponse';
import { UpdateCloudPhonePropertyRequest } from './model/UpdateCloudPhonePropertyRequest';
import { UpdateCloudPhonePropertyRequestBody } from './model/UpdateCloudPhonePropertyRequestBody';
import { UpdateCloudPhonePropertyResponse } from './model/UpdateCloudPhonePropertyResponse';
import { UpdateImageMemberRequest } from './model/UpdateImageMemberRequest';
import { UpdateImageMemberRequestBody } from './model/UpdateImageMemberRequestBody';
import { UpdateImageMemberResponse } from './model/UpdateImageMemberResponse';
import { UpdateKeypairRequest } from './model/UpdateKeypairRequest';
import { UpdateKeypairRequestBody } from './model/UpdateKeypairRequestBody';
import { UpdateKeypairResponse } from './model/UpdateKeypairResponse';
import { UpdatePhoneNameRequest } from './model/UpdatePhoneNameRequest';
import { UpdatePhoneNameRequestBody } from './model/UpdatePhoneNameRequestBody';
import { UpdatePhoneNameResponse } from './model/UpdatePhoneNameResponse';
import { UpdateServerNameRequest } from './model/UpdateServerNameRequest';
import { UpdateServerNameRequestBody } from './model/UpdateServerNameRequestBody';
import { UpdateServerNameResponse } from './model/UpdateServerNameResponse';
import { Volume } from './model/Volume';

export class CphClient {
    public static newBuilder(): ClientBuilder<CphClient> {
            let client = new ClientBuilder<CphClient>(newClient);
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
     * 镜像共享,共享镜像给指定账号。
     * - 镜像只能共享给同region下的其他[华为云](tag:hws,hws_hk)账号(project_id)。
     * - 同一镜像最多只能共享给10个其他账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享镜像给指定账号
     * @param {string} imageId 镜像id。
     * @param {AddImageMemberRequestBody} addImageMemberRequestBody 共享镜像请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addImageMember(addImageMemberRequest?: AddImageMemberRequest): Promise<AddImageMemberResponse> {
        const options = ParamCreater().addImageMember(addImageMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加标签
     * @param {'cph-server'} resourceType 资源类型。  - cph-server，云手机服务器
     * @param {string} resourceId 资源ID。
     * @param {BatchCreateTagsRequestBody} batchCreateTagsRequestBody 批量创建标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateTags(batchCreateTagsRequest?: BatchCreateTagsRequest): Promise<BatchCreateTagsResponse> {
        const options = ParamCreater().batchCreateTags(batchCreateTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除标签
     * @param {'cph-server'} resourceType 资源类型。  - cph-server，云手机服务器
     * @param {string} resourceId 资源ID。
     * @param {BatchDeleteTagsRequestBody} batchDeleteTagsRequestBody 批量删除标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTags(batchDeleteTagsRequest?: BatchDeleteTagsRequest): Promise<BatchDeleteTagsResponse> {
        const options = ParamCreater().batchDeleteTags(batchDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量导出云手机中的数据。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出云手机数据
     * @param {BatchExportCloudPhoneDataRequestBody} batchExportCloudPhoneDataRequestBody 导出手机数据请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchExportCloudPhoneData(batchExportCloudPhoneDataRequest?: BatchExportCloudPhoneDataRequest): Promise<BatchExportCloudPhoneDataResponse> {
        const options = ParamCreater().batchExportCloudPhoneData(batchExportCloudPhoneDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量恢复数据到云手机中。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
     * 
     * 高版本手机导出的数据无法在低版本手机内恢复。低版本手机导出的数据可以在高版本手机内恢复，但可能会在极少数场景下有不兼容的风险。因此推荐您在同版本手机间进行导出与恢复。
     * 
     * 手机在运行状态会有数据缓存，直接运行恢复的文件可能带来访问失败、应用崩溃等现象，建议在还原成功后重启手机，以保证云手机稳定运行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复云手机数据
     * @param {BatchImportCloudPhoneDataRequestBody} batchImportCloudPhoneDataRequestBody 导入数据请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchImportCloudPhoneData(batchImportCloudPhoneDataRequest?: BatchImportCloudPhoneDataRequest): Promise<BatchImportCloudPhoneDataResponse> {
        const options = ParamCreater().batchImportCloudPhoneData(batchImportCloudPhoneDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云手机连接信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云手机连接信息
     * @param {ConnectionRequestBody} batchShowPhoneConnectInfosRequestBody 云手机连接信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowPhoneConnectInfos(batchShowPhoneConnectInfosRequest?: BatchShowPhoneConnectInfosRequest): Promise<BatchShowPhoneConnectInfosResponse> {
        const options = ParamCreater().batchShowPhoneConnectInfos(batchShowPhoneConnectInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换云手机服务器, 支持您换一台新的云手机服务器。切换后服务器名称、服务器ID与原服务器相同, 服务器计费保持不变。服务器切换的同时服务器上的手机重新创建，不保留用户数据。切换需要额外的资源和资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换云手机服务器
     * @param {string} serverId 云手机服务器的唯一标识。
     * @param {ChangeCloudPhoneServerRequestBody} changeCloudPhoneServerRequestBody 切换的云手机服务器请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeCloudPhoneServer(changeCloudPhoneServerRequest?: ChangeCloudPhoneServerRequest): Promise<ChangeCloudPhoneServerResponse> {
        const options = ParamCreater().changeCloudPhoneServer(changeCloudPhoneServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更云手机服务器规格。接口调用成功后，大约2分钟左右规格会变更结束，在订单中心可以查看到变更的订单状态为成功，且查询服务器的详细信息，可以查看到服务器规格名称已经变成新的规格名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更云手机服务器规格
     * @param {ChangeCloudPhoneServerModelRequestBody} changeCloudPhoneServerModelRequestBody 变更云手机服务器规格请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeCloudPhoneServerModel(changeCloudPhoneServerModelRequest?: ChangeCloudPhoneServerModelRequest): Promise<ChangeCloudPhoneServerModelResponse> {
        const options = ParamCreater().changeCloudPhoneServerModel(changeCloudPhoneServerModelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口创建的服务器仅包含服务器和服务器的镜像，不包含云手机实例和镜像等内容。若需要创建包含云手机实例的服务器，请使用创建云手机服务器接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云手机裸服务器
     * @param {CreateCloudPhoneSingleServerRequestBody} createCloudPhoneSingleServerRequestBody 创建云手机裸服务器请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudPhoneSingleServer(createCloudPhoneSingleServerRequest?: CreateCloudPhoneSingleServerRequest): Promise<CreateCloudPhoneSingleServerResponse> {
        const options = ParamCreater().createCloudPhoneSingleServer(createCloudPhoneSingleServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * [创建](tag:fcs)[购买](tag:hws,hws_hk,cmcc,ctc)云手机服务器，支持您复用已有的VPC网络管理云手机服务器，支持云手机服务器复用您已[创建](tag:fcs)[购买](tag:hws,hws_hk,cmcc,ctc)的共享带宽等资源。
     * - 请确保您使用的账号具有CPH AgencyDependencyAccess权限。
     * - 请确保您有足够的服务器及网络配额，配额校验不通过将导致创建失败。
     * [- 当前只支持按需创建。](tag:fcs)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary [创建](tag:fcs)[购买](tag:hws,hws_hk,cmcc,ctc)云手机服务器
     * @param {CreateNet2CloudPhoneServerRequestBody} createNet2CloudPhoneServerRequestBody [创建](tag:fcs)[购买](tag:hws,hws_hk,cmcc,ctc)云手机服务器请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNet2CloudPhoneServer(createNet2CloudPhoneServerRequest?: CreateNet2CloudPhoneServerRequest): Promise<CreateNet2CloudPhoneServerResponse> {
        const options = ParamCreater().createNet2CloudPhoneServer(createNet2CloudPhoneServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云手机服务器，仅可以删除按需购买的云手机服务器，最多删除十台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云手机服务器
     * @param {DeleteCloudPhoneServerRequestBody} deleteCloudPhoneServerRequestBody 删除云手机服务器请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudPhoneServer(deleteCloudPhoneServerRequest?: DeleteCloudPhoneServerRequest): Promise<DeleteCloudPhoneServerResponse> {
        const options = ParamCreater().deleteCloudPhoneServer(deleteCloudPhoneServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像
     * @param {string} imageId 镜像id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImage(deleteImageRequest?: DeleteImageRequest): Promise<DeleteImageResponse> {
        const options = ParamCreater().deleteImage(deleteImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享镜像
     * @param {string} imageId 镜像id。
     * @param {string} memberId 被共享账号的PROJECT_ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageMember(deleteImageMemberRequest?: DeleteImageMemberRequest): Promise<DeleteImageMemberResponse> {
        const options = ParamCreater().deleteImageMember(deleteImageMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在共享应用存储目录中删除共享应用，该功能仅在支持共享应用的云手机规格上可实现。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享应用
     * @param {DeleteShareAppsRequestBody} deleteShareAppsRequestBody 删除共享应用请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteShareApps(deleteShareAppsRequest?: DeleteShareAppsRequest): Promise<DeleteShareAppsResponse> {
        const options = ParamCreater().deleteShareApps(deleteShareAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享存储目录中文件，该功能仅在支持共享存储的云手机规格上可实现。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享存储文件
     * @param {DeleteShareFilesRequestBody} deleteShareFilesRequestBody 删除共享存储请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteShareFiles(deleteShareFilesRequest?: DeleteShareFilesRequest): Promise<DeleteShareFilesResponse> {
        const options = ParamCreater().deleteShareFiles(deleteShareFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容云手机数据盘大小
     * [- 注意: 本接口会产生扩容新增容量的费用，新增容量不算入服务器免费存储额度内。](tag:hc,hk,cmcc,ctc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容云手机数据盘大小
     * @param {ExpandPhoneDataVolumeSizeRequestBody} expandPhoneDataVolumeSizeRequestBody 云手机信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandPhoneDataVolumeSize(expandPhoneDataVolumeSizeRequest?: ExpandPhoneDataVolumeSizeRequest): Promise<ExpandPhoneDataVolumeSizeResponse> {
        const options = ParamCreater().expandPhoneDataVolumeSize(expandPhoneDataVolumeSizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 手机流量路由修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 云手机流量导流
     * @param {ImportTrafficRequestBody} importTrafficRequestBody 云手机导流请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importTraffic(importTrafficRequest?: ImportTrafficRequest): Promise<ImportTrafficResponse> {
        const options = ParamCreater().importTraffic(importTrafficRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据项目ID查询可用的手机镜像。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询手机镜像
     * @param {string} [imageType] 镜像类型 公共镜像：public 私有镜像：private 共享镜像：share 所有类型镜像：all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudPhoneImages(listCloudPhoneImagesRequest?: ListCloudPhoneImagesRequest): Promise<ListCloudPhoneImagesResponse> {
        const options = ParamCreater().listCloudPhoneImages(listCloudPhoneImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询或统计云手机的规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云手机规格列表
     * @param {number} [status] 规格状态 - 0：下线状态 - 1：正常使用 不传该参数表示查询所有状态的规格。
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudPhoneModels(listCloudPhoneModelsRequest?: ListCloudPhoneModelsRequest): Promise<ListCloudPhoneModelsResponse> {
        const options = ParamCreater().listCloudPhoneModels(listCloudPhoneModelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云手机服务器的规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云手机服务器规格列表
     * @param {number} [productType] 产品类型。 - 0：云手机 - 1：云手游
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudPhoneServerModels(listCloudPhoneServerModelsRequest?: ListCloudPhoneServerModelsRequest): Promise<ListCloudPhoneServerModelsResponse> {
        const options = ParamCreater().listCloudPhoneServerModels(listCloudPhoneServerModelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询云手机服务器，云手机服务器列表按照创建时间进行降序排列。分页查询可以指定offset以及limit。如果不存在云手机服务器，则返回空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云手机服务器列表
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {string} [serverName] 云手机服务器名称，支持模糊查询。
     * @param {string} [serverId] 云手机服务器的唯一标识。
     * @param {string} [networkVersion] 云手机服务器是否为自定义网络标识。 - v1：系统定义网络的云手机服务器 - v2：自定义网络的云手机服务器
     * @param {string} [phoneModelName] 手机规格名称。
     * @param {number} [createSince] 查询的起始时间戳。
     * @param {number} [createUntil] 查询的结束时间戳。
     * @param {number} [status] 服务器状态。 - 0、1、3、4：创建中 - 2：异常 - 5：正常 - 8：冻结 - 10：关机 - 11：关机中 - 12：关机失败 - 13：开机中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudPhoneServers(listCloudPhoneServersRequest?: ListCloudPhoneServersRequest): Promise<ListCloudPhoneServersResponse> {
        const options = ParamCreater().listCloudPhoneServers(listCloudPhoneServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询云手机，云手机列表按照创建时间进行降序排列。分页查询可以指定offset以及limit。如果不存在云手机，则返回空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云手机列表
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~200（默认值为100），一般设置为10、20、50。
     * @param {string} [phoneName] 云手机名称，支持模糊查询。
     * @param {string} [serverId] 云手机服务器的唯一标识。
     * @param {number} [status] 云手机状态。 - 1：创建中 - 2：运行中 - 3：重置中 - 4：重启中 - 6：冻结 - 7：正在关机 - 8：已关机 - -5：重置失败 - -6：重启失败 - -7：手机异常 - -8：创建失败 - -9：关机失败
     * @param {number} [type] 云手机类型。 - 0：普通云手机
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudPhones(listCloudPhonesRequest?: ListCloudPhonesRequest): Promise<ListCloudPhonesResponse> {
        const options = ParamCreater().listCloudPhones(listCloudPhonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询编码服务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询编码服务
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {number} [type] 编码服务类型。 - 0：服务器 - 1：容器
     * @param {number} [status] 状态列表。 - 1：运行中 - 2：异常 - 3：重启中 - 4：冻结 - 5：关机 - 100、1014、0：创建中
     * @param {string} [serverId] 云手机服务器的唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEncodeServers(listEncodeServersRequest?: ListEncodeServersRequest): Promise<ListEncodeServersResponse> {
        const options = ParamCreater().listEncodeServers(listEncodeServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像已共享账号列表
     * - 路径中的project_id为共享账号的租户id
     * - 路径中的image_id为共享账号的镜像id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像已共享账号列表
     * @param {string} imageId 镜像id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageMembers(listImageMembersRequest?: ListImageMembersRequest): Promise<ListImageMembersResponse> {
        const options = ParamCreater().listImageMembers(listImageMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义镜像列表
     * @param {string} [imageType] 镜像类型。 - private：私有镜像 - share：共享镜像
     * @param {number} [status] 镜像状态。 - 0：CREATING 创建中 - 1：PRODUCTION 生产态，可使用 - 2：CREATE_FAILED 创建失败
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {string} [imageId] 镜像id
     * @param {string} [imageName] 镜像名称
     * @param {number} [createSince] 起始时间
     * @param {number} [createUntil] 截止时间
     * @param {string} [srcProjectId] 共享镜像账号的projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImages(listImagesRequest?: ListImagesRequest): Promise<ListImagesResponse> {
        const options = ParamCreater().listImages(listImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询同一个request id下的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务执行状态列表
     * @param {string} [requestId] 任务下发请求时响应的request_id。 request_id和request_ids必须指定其中一个。request_id和request_ids同时指定的时候，以request_ids为准。
     * @param {string} [requestIds] 任务下发请求时响应的多个request_id，用逗号分隔，最多不能超过20个。 request_id和request_ids必须指定其中一个。request_id和request_ids同时指定的时候，以request_ids为准。
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobs(listJobsRequest?: ListJobsRequest): Promise<ListJobsResponse> {
        const options = ParamCreater().listJobs(listJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定区域和资源类型的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {'cph-server'} resourceType 资源类型。  - cph-server，云手机服务器
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {number} [offset] 索引位置，从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）,必须为数字，不能为负数
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
     * 查询资源实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {'cph-server'} resourceType 资源类型。  - cph-server，云手机服务器
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody 批量创建删除标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'cph-server'} resourceType 资源类型。  - cph-server，云手机服务器
     * @param {string} resourceId 资源ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
        const options = ParamCreater().listResourceTags(listResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询共享存储指定路径下的文件列表，该功能仅在支持共享存储的云手机规格上可实现。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享存储文件
     * @param {string} serverIds 云手机服务器ID列表，多个服务器ID用逗号（,）分隔。
     * @param {string} path 待查询的目录名称， 可以包含大小写字母、数字、“.”、“+”、“-”、“_”、“/”、\&quot;&#x3D;\&quot;；必须以“/”开头，并且不能只包含“/”；不能包含“../”、“//”等。 示例：/data/data
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~50（默认值为50）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShareFiles(listShareFilesRequest?: ListShareFilesRequest): Promise<ListShareFilesResponse> {
        const options = ParamCreater().listShareFiles(listShareFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 推送应用tar文件至共享应用存储目录中，该功能仅在支持共享应用的云手机服务器上可实现。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
     * 
     * 注意：不能向存在低安卓版本云手机的服务器推送高安卓版本手机导出的应用包，否则可能会造成手机数据兼容性问题。如果您使用的是physical.kg1.4xlarge.a.cp服务器规格，请确保共享存储的可用空间大于两倍的tar包大小
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 推送共享应用
     * @param {PushShareAppsRequestBody} pushShareAppsRequestBody 推送共享应用请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pushShareApps(pushShareAppsRequest?: PushShareAppsRequest): Promise<PushShareAppsResponse> {
        const options = ParamCreater().pushShareApps(pushShareAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 推送文件至共享存储目录中，该功能仅在支持共享存储的云手机规格上可实现。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 推送共享存储文件
     * @param {PushShareFilesRequestBody} pushShareFilesRequestBody 推送共享存储请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pushShareFiles(pushShareFilesRequest?: PushShareFilesRequest): Promise<PushShareFilesResponse> {
        const options = ParamCreater().pushShareFiles(pushShareFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重置云手机，将云手机恢复出厂设置。该接口为异步接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置云手机
     * @param {ResetCloudPhoneRequestBody} resetCloudPhoneRequestBody 重置手机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetCloudPhone(resetCloudPhoneRequest?: ResetCloudPhoneRequest): Promise<ResetCloudPhoneResponse> {
        const options = ParamCreater().resetCloudPhone(resetCloudPhoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重启云手机，也可用于开启云手机。该接口为异步接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启云手机
     * @param {RestartCloudPhoneRequestBody} restartCloudPhoneRequestBody 重启手机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartCloudPhone(restartCloudPhoneRequest?: RestartCloudPhoneRequest): Promise<RestartCloudPhoneResponse> {
        const options = ParamCreater().restartCloudPhone(restartCloudPhoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重启云手机服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启云手机服务器
     * @param {RestartCloudPhoneServerRequestBody} restartCloudPhoneServerRequestBody 云手机服务器id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartCloudPhoneServer(restartCloudPhoneServerRequest?: RestartCloudPhoneServerRequest): Promise<RestartCloudPhoneServerResponse> {
        const options = ParamCreater().restartCloudPhoneServer(restartCloudPhoneServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重启编码服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启编码服务
     * @param {RestartEncodeServerRequestBody} restartEncodeServerRequestBody 重启编码服务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartEncodeServer(restartEncodeServerRequest?: RestartEncodeServerRequest): Promise<RestartEncodeServerResponse> {
        const options = ParamCreater().restartEncodeServer(restartEncodeServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云手机使用的带宽信息，本接口只适用于使用系统定义网络的服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽信息
     * @param {number} [offset] 偏移量为一个大于等于0整数，表示查询该偏移量后面的所有的资源数，默认值为0。
     * @param {number} [limit] 每页返回的资源个数。取值范围：1~100（默认值为100），一般设置为10、20、50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBandwidthDetail(showBandwidthDetailRequest?: ShowBandwidthDetailRequest): Promise<ShowBandwidthDetailResponse> {
        const options = ParamCreater().showBandwidthDetail(showBandwidthDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云手机的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云手机详情
     * @param {string} phoneId 云手机id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudPhoneDetail(showCloudPhoneDetailRequest?: ShowCloudPhoneDetailRequest): Promise<ShowCloudPhoneDetailResponse> {
        const options = ParamCreater().showCloudPhoneDetail(showCloudPhoneDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据server_id查询云手机服务器的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云手机服务器详情
     * @param {string} serverId 云手机服务器的唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudPhoneServerDetail(showCloudPhoneServerDetailRequest?: ShowCloudPhoneServerDetailRequest): Promise<ShowCloudPhoneServerDetailResponse> {
        const options = ParamCreater().showCloudPhoneServerDetail(showCloudPhoneServerDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务执行状态
     * @param {string} jobId 任务id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量关闭云手机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭云手机
     * @param {StopCloudPhoneRequestBody} stopCloudPhoneRequestBody 云手机id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopCloudPhone(stopCloudPhoneRequest?: StopCloudPhoneRequest): Promise<StopCloudPhoneResponse> {
        const options = ParamCreater().stopCloudPhone(stopCloudPhoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云手机使用的共享带宽大小，本接口只适用于使用系统定义网络的服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改共享带宽
     * @param {string} bandWidthId 带宽id。
     * @param {UpdateBandwidthRequestBody} updateBandwidthRequestBody - 小于等于300Mbit/s：默认最小增长步长为1Mbit/s。 - 300Mbit/s~1000Mbit/s：默认最小增长步长为50Mbit/s。 - 大于1000Mbit/s：默认最小增长步长为500Mbit/s
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
     * 部分云手机属性开放更新能力，部分属性无法更新，部分属性需要重启手机生效，属性约束请云手机属性列表。如果手机处于异常状态，属性更新后需恢复手机状态为运行中才可生效。该接口为异步接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云手机属性
     * @param {UpdateCloudPhonePropertyRequestBody} updateCloudPhonePropertyRequestBody 云手机信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCloudPhoneProperty(updateCloudPhonePropertyRequest?: UpdateCloudPhonePropertyRequest): Promise<UpdateCloudPhonePropertyResponse> {
        const options = ParamCreater().updateCloudPhoneProperty(updateCloudPhonePropertyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户收到共享镜像后，选择接受或拒绝共享镜像。未接受的共享镜像无法使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新共享镜像接受信息
     * @param {string} imageId 镜像id。
     * @param {UpdateImageMemberRequestBody} updateImageMemberRequestBody 镜像成员的状态。 - 接受: accepted - 拒绝: rejected
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateImageMember(updateImageMemberRequest?: UpdateImageMemberRequest): Promise<UpdateImageMemberResponse> {
        const options = ParamCreater().updateImageMember(updateImageMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改连接云手机的密钥对。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改密钥对
     * @param {UpdateKeypairRequestBody} updateKeypairRequestBody 更新秘钥请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeypair(updateKeypairRequest?: UpdateKeypairRequest): Promise<UpdateKeypairResponse> {
        const options = ParamCreater().updateKeypair(updateKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据phoneId修改phoneName。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云手机名称
     * @param {string} phoneId 云手机id。
     * @param {UpdatePhoneNameRequestBody} updatePhoneNameRequestBody 云手机名称，必须为小写字母（a-z）、大写字母（A-Z）、数字（0-9）、中文字符、中划线-、下划线_，且不得超过60个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePhoneName(updatePhoneNameRequest?: UpdatePhoneNameRequest): Promise<UpdatePhoneNameResponse> {
        const options = ParamCreater().updatePhoneName(updatePhoneNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据serverId修改serverName。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云手机服务器名称
     * @param {string} serverId 云手机服务器的唯一标识。
     * @param {UpdateServerNameRequestBody} updateServerNameRequestBody 云手机服务器名称，必须为小写字母（a-z）、大写字母（A-Z）、数字（0-9）、中文字符、中划线-、下划线_，且不得超过60个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerName(updateServerNameRequest?: UpdateServerNameRequest): Promise<UpdateServerNameResponse> {
        const options = ParamCreater().updateServerName(updateServerNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在云手机中安装apk。系统会将指定的apk文件下载后直接安装到云手机中。
     * 支持安装单apk应用和多apk应用。可使用install命令安装单apk应用，一次只支持安装一个apk，如果一次传多个apk只有第一个安装成功；可使用install-multiple命令安装多apk应用（多apk应用为单个应用拆分成多个apk），一次只支持同一个应用的多个apk。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
     * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
     * - 允许安装的apk大小限制为2G（即不可将obs桶内大于2G的apk安装到手机中），超过限制将返回错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 安装apk
     * @param {InstallApkRequestBody} installApkRequestBody 安装应用请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public installApk(installApkRequest?: InstallApkRequest): Promise<InstallApkResponse> {
        const options = ParamCreater().installApk(installApkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 推送文件到云手机文件系统中。系统会将所指定的文件下载解压后，将解压后的内容全部推送到云手机的根目录下。只支持指定tar格式的文件进行推送，您需要将tar文件提前上传至您的OBS桶中。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
     * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
     * - 允许推送的文件大小限制为6G（即不可将obs桶内大于6G的文件推送到手机中），超过限制将返回错误。
     * - 手机的系统有限制，推送到系统盘不保证推送成功，推荐把文件推送到手机的数据盘。所以在构建\&quot;tar\&quot;文件时，应将待推送的文件放到本地创建的data目录后将其打包（如tar -cvf data.tar data ），以确保把文件推送到手机的数据盘下。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 推送文件
     * @param {PushFileRequestBody} pushFileRequestBody 推送文件请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pushFile(pushFileRequest?: PushFileRequest): Promise<PushFileResponse> {
        const options = ParamCreater().pushFile(pushFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在云手机中执行shell命令。该接口为异步接口。
     * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 异步执行adb命令
     * @param {RunShellCommandRequestBody} runShellCommandRequestBody Shell命令请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runShellCommand(runShellCommandRequest?: RunShellCommandRequest): Promise<RunShellCommandResponse> {
        const options = ParamCreater().runShellCommand(runShellCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在云手机中同步执行命令并返回命令执行的输出信息，该接口仅支持adb shell命令的执行。1分钟内每个用户调用接口次数上限为6次，每个云手机允许执行命令超时时间为2秒，接口时间不超过30秒，执行云手机数越多，接口耗时相应越长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步执行adb命令
     * @param {RunSyncCommandRequestBody} runSyncCommandRequestBody 同步命令请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runSyncCommand(runSyncCommandRequest?: RunSyncCommandRequest): Promise<RunSyncCommandResponse> {
        const options = ParamCreater().runSyncCommand(runSyncCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在云手机中卸载apk。该接口为异步接口。
     * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 卸载apk
     * @param {UninstallApkRequestBody} uninstallApkRequestBody 卸载应用请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uninstallApk(uninstallApkRequest?: UninstallApkRequest): Promise<UninstallApkResponse> {
        const options = ParamCreater().uninstallApk(uninstallApkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 镜像共享,共享镜像给指定账号。
         * - 镜像只能共享给同region下的其他[华为云](tag:hws,hws_hk)账号(project_id)。
         * - 同一镜像最多只能共享给10个其他账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addImageMember(addImageMemberRequest?: AddImageMemberRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/images/{image_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let imageId;

            if (addImageMemberRequest !== null && addImageMemberRequest !== undefined) {
                if (addImageMemberRequest instanceof AddImageMemberRequest) {
                    imageId = addImageMemberRequest.imageId;
                    body = addImageMemberRequest.body
                } else {
                    imageId = addImageMemberRequest['image_id'];
                    body = addImageMemberRequest['body'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling addImageMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateTags(batchCreateTagsRequest?: BatchCreateTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/action",
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

            if (batchCreateTagsRequest !== null && batchCreateTagsRequest !== undefined) {
                if (batchCreateTagsRequest instanceof BatchCreateTagsRequest) {
                    resourceType = batchCreateTagsRequest.resourceType;
                    resourceId = batchCreateTagsRequest.resourceId;
                    body = batchCreateTagsRequest.body
                } else {
                    resourceType = batchCreateTagsRequest['resource_type'];
                    resourceId = batchCreateTagsRequest['resource_id'];
                    body = batchCreateTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTags(batchDeleteTagsRequest?: BatchDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/action",
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

            if (batchDeleteTagsRequest !== null && batchDeleteTagsRequest !== undefined) {
                if (batchDeleteTagsRequest instanceof BatchDeleteTagsRequest) {
                    resourceType = batchDeleteTagsRequest.resourceType;
                    resourceId = batchDeleteTagsRequest.resourceId;
                    body = batchDeleteTagsRequest.body
                } else {
                    resourceType = batchDeleteTagsRequest['resource_type'];
                    resourceId = batchDeleteTagsRequest['resource_id'];
                    body = batchDeleteTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchDeleteTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量导出云手机中的数据。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchExportCloudPhoneData(batchExportCloudPhoneDataRequest?: BatchExportCloudPhoneDataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-storage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchExportCloudPhoneDataRequest !== null && batchExportCloudPhoneDataRequest !== undefined) {
                if (batchExportCloudPhoneDataRequest instanceof BatchExportCloudPhoneDataRequest) {
                    body = batchExportCloudPhoneDataRequest.body
                } else {
                    body = batchExportCloudPhoneDataRequest['body'];
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
         * 批量恢复数据到云手机中。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
         * 
         * 高版本手机导出的数据无法在低版本手机内恢复。低版本手机导出的数据可以在高版本手机内恢复，但可能会在极少数场景下有不兼容的风险。因此推荐您在同版本手机间进行导出与恢复。
         * 
         * 手机在运行状态会有数据缓存，直接运行恢复的文件可能带来访问失败、应用崩溃等现象，建议在还原成功后重启手机，以保证云手机稳定运行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchImportCloudPhoneData(batchImportCloudPhoneDataRequest?: BatchImportCloudPhoneDataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchImportCloudPhoneDataRequest !== null && batchImportCloudPhoneDataRequest !== undefined) {
                if (batchImportCloudPhoneDataRequest instanceof BatchImportCloudPhoneDataRequest) {
                    body = batchImportCloudPhoneDataRequest.body
                } else {
                    body = batchImportCloudPhoneDataRequest['body'];
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
         * 获取云手机连接信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowPhoneConnectInfos(batchShowPhoneConnectInfosRequest?: BatchShowPhoneConnectInfosRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchShowPhoneConnectInfosRequest !== null && batchShowPhoneConnectInfosRequest !== undefined) {
                if (batchShowPhoneConnectInfosRequest instanceof BatchShowPhoneConnectInfosRequest) {
                    body = batchShowPhoneConnectInfosRequest.body
                } else {
                    body = batchShowPhoneConnectInfosRequest['body'];
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
         * 切换云手机服务器, 支持您换一台新的云手机服务器。切换后服务器名称、服务器ID与原服务器相同, 服务器计费保持不变。服务器切换的同时服务器上的手机重新创建，不保留用户数据。切换需要额外的资源和资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeCloudPhoneServer(changeCloudPhoneServerRequest?: ChangeCloudPhoneServerRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloud-phone/servers/{server_id}/change",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeCloudPhoneServerRequest !== null && changeCloudPhoneServerRequest !== undefined) {
                if (changeCloudPhoneServerRequest instanceof ChangeCloudPhoneServerRequest) {
                    serverId = changeCloudPhoneServerRequest.serverId;
                    body = changeCloudPhoneServerRequest.body
                } else {
                    serverId = changeCloudPhoneServerRequest['server_id'];
                    body = changeCloudPhoneServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeCloudPhoneServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更云手机服务器规格。接口调用成功后，大约2分钟左右规格会变更结束，在订单中心可以查看到变更的订单状态为成功，且查询服务器的详细信息，可以查看到服务器规格名称已经变成新的规格名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeCloudPhoneServerModel(changeCloudPhoneServerModelRequest?: ChangeCloudPhoneServerModelRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/servers/change-server-model",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeCloudPhoneServerModelRequest !== null && changeCloudPhoneServerModelRequest !== undefined) {
                if (changeCloudPhoneServerModelRequest instanceof ChangeCloudPhoneServerModelRequest) {
                    body = changeCloudPhoneServerModelRequest.body
                } else {
                    body = changeCloudPhoneServerModelRequest['body'];
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
         * 该接口创建的服务器仅包含服务器和服务器的镜像，不包含云手机实例和镜像等内容。若需要创建包含云手机实例的服务器，请使用创建云手机服务器接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudPhoneSingleServer(createCloudPhoneSingleServerRequest?: CreateCloudPhoneSingleServerRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/cloud-phone/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCloudPhoneSingleServerRequest !== null && createCloudPhoneSingleServerRequest !== undefined) {
                if (createCloudPhoneSingleServerRequest instanceof CreateCloudPhoneSingleServerRequest) {
                    body = createCloudPhoneSingleServerRequest.body
                } else {
                    body = createCloudPhoneSingleServerRequest['body'];
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
         * [创建](tag:fcs)[购买](tag:hws,hws_hk,cmcc,ctc)云手机服务器，支持您复用已有的VPC网络管理云手机服务器，支持云手机服务器复用您已[创建](tag:fcs)[购买](tag:hws,hws_hk,cmcc,ctc)的共享带宽等资源。
         * - 请确保您使用的账号具有CPH AgencyDependencyAccess权限。
         * - 请确保您有足够的服务器及网络配额，配额校验不通过将导致创建失败。
         * [- 当前只支持按需创建。](tag:fcs)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNet2CloudPhoneServer(createNet2CloudPhoneServerRequest?: CreateNet2CloudPhoneServerRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloud-phone/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNet2CloudPhoneServerRequest !== null && createNet2CloudPhoneServerRequest !== undefined) {
                if (createNet2CloudPhoneServerRequest instanceof CreateNet2CloudPhoneServerRequest) {
                    body = createNet2CloudPhoneServerRequest.body
                } else {
                    body = createNet2CloudPhoneServerRequest['body'];
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
         * 删除云手机服务器，仅可以删除按需购买的云手机服务器，最多删除十台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudPhoneServer(deleteCloudPhoneServerRequest?: DeleteCloudPhoneServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cloud-phone/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteCloudPhoneServerRequest !== null && deleteCloudPhoneServerRequest !== undefined) {
                if (deleteCloudPhoneServerRequest instanceof DeleteCloudPhoneServerRequest) {
                    body = deleteCloudPhoneServerRequest.body
                } else {
                    body = deleteCloudPhoneServerRequest['body'];
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
         * 删除自定义镜像
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImage(deleteImageRequest?: DeleteImageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloud-phone/images/{image_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let imageId;

            if (deleteImageRequest !== null && deleteImageRequest !== undefined) {
                if (deleteImageRequest instanceof DeleteImageRequest) {
                    imageId = deleteImageRequest.imageId;
                } else {
                    imageId = deleteImageRequest['image_id'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling deleteImage.');
            }

            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除共享镜像
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImageMember(deleteImageMemberRequest?: DeleteImageMemberRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloud-phone/images/{image_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let imageId;
            
            let memberId;

            if (deleteImageMemberRequest !== null && deleteImageMemberRequest !== undefined) {
                if (deleteImageMemberRequest instanceof DeleteImageMemberRequest) {
                    imageId = deleteImageMemberRequest.imageId;
                    memberId = deleteImageMemberRequest.memberId;
                } else {
                    imageId = deleteImageMemberRequest['image_id'];
                    memberId = deleteImageMemberRequest['member_id'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling deleteImageMember.');
            }
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling deleteImageMember.');
            }

            options.pathParams = { 'image_id': imageId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在共享应用存储目录中删除共享应用，该功能仅在支持共享应用的云手机规格上可实现。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteShareApps(deleteShareAppsRequest?: DeleteShareAppsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloud-phone/phones/share-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteShareAppsRequest !== null && deleteShareAppsRequest !== undefined) {
                if (deleteShareAppsRequest instanceof DeleteShareAppsRequest) {
                    body = deleteShareAppsRequest.body
                } else {
                    body = deleteShareAppsRequest['body'];
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
         * 删除共享存储目录中文件，该功能仅在支持共享存储的云手机规格上可实现。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteShareFiles(deleteShareFilesRequest?: DeleteShareFilesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/share-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteShareFilesRequest !== null && deleteShareFilesRequest !== undefined) {
                if (deleteShareFilesRequest instanceof DeleteShareFilesRequest) {
                    body = deleteShareFilesRequest.body
                } else {
                    body = deleteShareFilesRequest['body'];
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
         * 扩容云手机数据盘大小
         * [- 注意: 本接口会产生扩容新增容量的费用，新增容量不算入服务器免费存储额度内。](tag:hc,hk,cmcc,ctc)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandPhoneDataVolumeSize(expandPhoneDataVolumeSizeRequest?: ExpandPhoneDataVolumeSizeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/expand-volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (expandPhoneDataVolumeSizeRequest !== null && expandPhoneDataVolumeSizeRequest !== undefined) {
                if (expandPhoneDataVolumeSizeRequest instanceof ExpandPhoneDataVolumeSizeRequest) {
                    body = expandPhoneDataVolumeSizeRequest.body
                } else {
                    body = expandPhoneDataVolumeSizeRequest['body'];
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
         * 手机流量路由修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importTraffic(importTrafficRequest?: ImportTrafficRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones-traffic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importTrafficRequest !== null && importTrafficRequest !== undefined) {
                if (importTrafficRequest instanceof ImportTrafficRequest) {
                    body = importTrafficRequest.body
                } else {
                    body = importTrafficRequest['body'];
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
         * 根据项目ID查询可用的手机镜像。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudPhoneImages(listCloudPhoneImagesRequest?: ListCloudPhoneImagesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/phone-images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageType;

            if (listCloudPhoneImagesRequest !== null && listCloudPhoneImagesRequest !== undefined) {
                if (listCloudPhoneImagesRequest instanceof ListCloudPhoneImagesRequest) {
                    imageType = listCloudPhoneImagesRequest.imageType;
                } else {
                    imageType = listCloudPhoneImagesRequest['image_type'];
                }
            }

        
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询或统计云手机的规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudPhoneModels(listCloudPhoneModelsRequest?: ListCloudPhoneModelsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/phone-models",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let offset;
            
            let limit;

            if (listCloudPhoneModelsRequest !== null && listCloudPhoneModelsRequest !== undefined) {
                if (listCloudPhoneModelsRequest instanceof ListCloudPhoneModelsRequest) {
                    status = listCloudPhoneModelsRequest.status;
                    offset = listCloudPhoneModelsRequest.offset;
                    limit = listCloudPhoneModelsRequest.limit;
                } else {
                    status = listCloudPhoneModelsRequest['status'];
                    offset = listCloudPhoneModelsRequest['offset'];
                    limit = listCloudPhoneModelsRequest['limit'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云手机服务器的规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudPhoneServerModels(listCloudPhoneServerModelsRequest?: ListCloudPhoneServerModelsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/server-models",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productType;

            if (listCloudPhoneServerModelsRequest !== null && listCloudPhoneServerModelsRequest !== undefined) {
                if (listCloudPhoneServerModelsRequest instanceof ListCloudPhoneServerModelsRequest) {
                    productType = listCloudPhoneServerModelsRequest.productType;
                } else {
                    productType = listCloudPhoneServerModelsRequest['product_type'];
                }
            }

        
            if (productType !== null && productType !== undefined) {
                localVarQueryParameter['product_type'] = productType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询云手机服务器，云手机服务器列表按照创建时间进行降序排列。分页查询可以指定offset以及limit。如果不存在云手机服务器，则返回空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudPhoneServers(listCloudPhoneServersRequest?: ListCloudPhoneServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let serverName;
            
            let serverId;
            
            let networkVersion;
            
            let phoneModelName;
            
            let createSince;
            
            let createUntil;
            
            let status;

            if (listCloudPhoneServersRequest !== null && listCloudPhoneServersRequest !== undefined) {
                if (listCloudPhoneServersRequest instanceof ListCloudPhoneServersRequest) {
                    offset = listCloudPhoneServersRequest.offset;
                    limit = listCloudPhoneServersRequest.limit;
                    serverName = listCloudPhoneServersRequest.serverName;
                    serverId = listCloudPhoneServersRequest.serverId;
                    networkVersion = listCloudPhoneServersRequest.networkVersion;
                    phoneModelName = listCloudPhoneServersRequest.phoneModelName;
                    createSince = listCloudPhoneServersRequest.createSince;
                    createUntil = listCloudPhoneServersRequest.createUntil;
                    status = listCloudPhoneServersRequest.status;
                } else {
                    offset = listCloudPhoneServersRequest['offset'];
                    limit = listCloudPhoneServersRequest['limit'];
                    serverName = listCloudPhoneServersRequest['server_name'];
                    serverId = listCloudPhoneServersRequest['server_id'];
                    networkVersion = listCloudPhoneServersRequest['network_version'];
                    phoneModelName = listCloudPhoneServersRequest['phone_model_name'];
                    createSince = listCloudPhoneServersRequest['create_since'];
                    createUntil = listCloudPhoneServersRequest['create_until'];
                    status = listCloudPhoneServersRequest['status'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serverName !== null && serverName !== undefined) {
                localVarQueryParameter['server_name'] = serverName;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (networkVersion !== null && networkVersion !== undefined) {
                localVarQueryParameter['network_version'] = networkVersion;
            }
            if (phoneModelName !== null && phoneModelName !== undefined) {
                localVarQueryParameter['phone_model_name'] = phoneModelName;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询云手机，云手机列表按照创建时间进行降序排列。分页查询可以指定offset以及limit。如果不存在云手机，则返回空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudPhones(listCloudPhonesRequest?: ListCloudPhonesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/phones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let phoneName;
            
            let serverId;
            
            let status;
            
            let type;

            if (listCloudPhonesRequest !== null && listCloudPhonesRequest !== undefined) {
                if (listCloudPhonesRequest instanceof ListCloudPhonesRequest) {
                    offset = listCloudPhonesRequest.offset;
                    limit = listCloudPhonesRequest.limit;
                    phoneName = listCloudPhonesRequest.phoneName;
                    serverId = listCloudPhonesRequest.serverId;
                    status = listCloudPhonesRequest.status;
                    type = listCloudPhonesRequest.type;
                } else {
                    offset = listCloudPhonesRequest['offset'];
                    limit = listCloudPhonesRequest['limit'];
                    phoneName = listCloudPhonesRequest['phone_name'];
                    serverId = listCloudPhonesRequest['server_id'];
                    status = listCloudPhonesRequest['status'];
                    type = listCloudPhonesRequest['type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (phoneName !== null && phoneName !== undefined) {
                localVarQueryParameter['phone_name'] = phoneName;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询编码服务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEncodeServers(listEncodeServersRequest?: ListEncodeServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/encode-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let type;
            
            let status;
            
            let serverId;

            if (listEncodeServersRequest !== null && listEncodeServersRequest !== undefined) {
                if (listEncodeServersRequest instanceof ListEncodeServersRequest) {
                    offset = listEncodeServersRequest.offset;
                    limit = listEncodeServersRequest.limit;
                    type = listEncodeServersRequest.type;
                    status = listEncodeServersRequest.status;
                    serverId = listEncodeServersRequest.serverId;
                } else {
                    offset = listEncodeServersRequest['offset'];
                    limit = listEncodeServersRequest['limit'];
                    type = listEncodeServersRequest['type'];
                    status = listEncodeServersRequest['status'];
                    serverId = listEncodeServersRequest['server_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像已共享账号列表
         * - 路径中的project_id为共享账号的租户id
         * - 路径中的image_id为共享账号的镜像id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageMembers(listImageMembersRequest?: ListImageMembersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/images/{image_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let imageId;

            if (listImageMembersRequest !== null && listImageMembersRequest !== undefined) {
                if (listImageMembersRequest instanceof ListImageMembersRequest) {
                    imageId = listImageMembersRequest.imageId;
                } else {
                    imageId = listImageMembersRequest['image_id'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling listImageMembers.');
            }

            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义镜像列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImages(listImagesRequest?: ListImagesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageType;
            
            let status;
            
            let offset;
            
            let limit;
            
            let imageId;
            
            let imageName;
            
            let createSince;
            
            let createUntil;
            
            let srcProjectId;

            if (listImagesRequest !== null && listImagesRequest !== undefined) {
                if (listImagesRequest instanceof ListImagesRequest) {
                    imageType = listImagesRequest.imageType;
                    status = listImagesRequest.status;
                    offset = listImagesRequest.offset;
                    limit = listImagesRequest.limit;
                    imageId = listImagesRequest.imageId;
                    imageName = listImagesRequest.imageName;
                    createSince = listImagesRequest.createSince;
                    createUntil = listImagesRequest.createUntil;
                    srcProjectId = listImagesRequest.srcProjectId;
                } else {
                    imageType = listImagesRequest['image_type'];
                    status = listImagesRequest['status'];
                    offset = listImagesRequest['offset'];
                    limit = listImagesRequest['limit'];
                    imageId = listImagesRequest['image_id'];
                    imageName = listImagesRequest['image_name'];
                    createSince = listImagesRequest['create_since'];
                    createUntil = listImagesRequest['create_until'];
                    srcProjectId = listImagesRequest['src_project_id'];
                }
            }

        
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (srcProjectId !== null && srcProjectId !== undefined) {
                localVarQueryParameter['src_project_id'] = srcProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询同一个request id下的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs(listJobsRequest?: ListJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let requestId;
            
            let requestIds;
            
            let offset;
            
            let limit;

            if (listJobsRequest !== null && listJobsRequest !== undefined) {
                if (listJobsRequest instanceof ListJobsRequest) {
                    requestId = listJobsRequest.requestId;
                    requestIds = listJobsRequest.requestIds;
                    offset = listJobsRequest.offset;
                    limit = listJobsRequest.limit;
                } else {
                    requestId = listJobsRequest['request_id'];
                    requestIds = listJobsRequest['request_ids'];
                    offset = listJobsRequest['offset'];
                    limit = listJobsRequest['limit'];
                }
            }

        
            if (requestId !== null && requestId !== undefined) {
                localVarQueryParameter['request_id'] = requestId;
            }
            if (requestIds !== null && requestIds !== undefined) {
                localVarQueryParameter['request_ids'] = requestIds;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定区域和资源类型的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceType;
            
            let limit;
            
            let offset;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    resourceType = listProjectTagsRequest.resourceType;
                    limit = listProjectTagsRequest.limit;
                    offset = listProjectTagsRequest.offset;
                } else {
                    resourceType = listProjectTagsRequest['resource_type'];
                    limit = listProjectTagsRequest['limit'];
                    offset = listProjectTagsRequest['offset'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProjectTags.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceType = listResourceInstancesRequest.resourceType;
                    body = listResourceInstancesRequest.body
                } else {
                    resourceType = listResourceInstancesRequest['resource_type'];
                    body = listResourceInstancesRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listResourceTagsRequest !== null && listResourceTagsRequest !== undefined) {
                if (listResourceTagsRequest instanceof ListResourceTagsRequest) {
                    resourceType = listResourceTagsRequest.resourceType;
                    resourceId = listResourceTagsRequest.resourceId;
                } else {
                    resourceType = listResourceTagsRequest['resource_type'];
                    resourceId = listResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询共享存储指定路径下的文件列表，该功能仅在支持共享存储的云手机规格上可实现。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShareFiles(listShareFilesRequest?: ListShareFilesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/servers/share-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverIds;
            
            let path;
            
            let offset;
            
            let limit;

            if (listShareFilesRequest !== null && listShareFilesRequest !== undefined) {
                if (listShareFilesRequest instanceof ListShareFilesRequest) {
                    serverIds = listShareFilesRequest.serverIds;
                    path = listShareFilesRequest.path;
                    offset = listShareFilesRequest.offset;
                    limit = listShareFilesRequest.limit;
                } else {
                    serverIds = listShareFilesRequest['server_ids'];
                    path = listShareFilesRequest['path'];
                    offset = listShareFilesRequest['offset'];
                    limit = listShareFilesRequest['limit'];
                }
            }

        
            if (serverIds === null || serverIds === undefined) {
                throw new RequiredError('serverIds','Required parameter serverIds was null or undefined when calling listShareFiles.');
            }
            if (serverIds !== null && serverIds !== undefined) {
                localVarQueryParameter['server_ids'] = serverIds;
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling listShareFiles.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 推送应用tar文件至共享应用存储目录中，该功能仅在支持共享应用的云手机服务器上可实现。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
         * 
         * 注意：不能向存在低安卓版本云手机的服务器推送高安卓版本手机导出的应用包，否则可能会造成手机数据兼容性问题。如果您使用的是physical.kg1.4xlarge.a.cp服务器规格，请确保共享存储的可用空间大于两倍的tar包大小
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pushShareApps(pushShareAppsRequest?: PushShareAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/share-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (pushShareAppsRequest !== null && pushShareAppsRequest !== undefined) {
                if (pushShareAppsRequest instanceof PushShareAppsRequest) {
                    body = pushShareAppsRequest.body
                } else {
                    body = pushShareAppsRequest['body'];
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
         * 推送文件至共享存储目录中，该功能仅在支持共享存储的云手机规格上可实现。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pushShareFiles(pushShareFilesRequest?: PushShareFilesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/share-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (pushShareFilesRequest !== null && pushShareFilesRequest !== undefined) {
                if (pushShareFilesRequest instanceof PushShareFilesRequest) {
                    body = pushShareFilesRequest.body
                } else {
                    body = pushShareFilesRequest['body'];
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
         * 批量重置云手机，将云手机恢复出厂设置。该接口为异步接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetCloudPhone(resetCloudPhoneRequest?: ResetCloudPhoneRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resetCloudPhoneRequest !== null && resetCloudPhoneRequest !== undefined) {
                if (resetCloudPhoneRequest instanceof ResetCloudPhoneRequest) {
                    body = resetCloudPhoneRequest.body
                } else {
                    body = resetCloudPhoneRequest['body'];
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
         * 批量重启云手机，也可用于开启云手机。该接口为异步接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCloudPhone(restartCloudPhoneRequest?: RestartCloudPhoneRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restartCloudPhoneRequest !== null && restartCloudPhoneRequest !== undefined) {
                if (restartCloudPhoneRequest instanceof RestartCloudPhoneRequest) {
                    body = restartCloudPhoneRequest.body
                } else {
                    body = restartCloudPhoneRequest['body'];
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
         * 批量重启云手机服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCloudPhoneServer(restartCloudPhoneServerRequest?: RestartCloudPhoneServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/servers/batch-restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restartCloudPhoneServerRequest !== null && restartCloudPhoneServerRequest !== undefined) {
                if (restartCloudPhoneServerRequest instanceof RestartCloudPhoneServerRequest) {
                    body = restartCloudPhoneServerRequest.body
                } else {
                    body = restartCloudPhoneServerRequest['body'];
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
         * 批量重启编码服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartEncodeServer(restartEncodeServerRequest?: RestartEncodeServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/encode-servers/batch-restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restartEncodeServerRequest !== null && restartEncodeServerRequest !== undefined) {
                if (restartEncodeServerRequest instanceof RestartEncodeServerRequest) {
                    body = restartEncodeServerRequest.body
                } else {
                    body = restartEncodeServerRequest['body'];
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
         * 查询云手机使用的带宽信息，本接口只适用于使用系统定义网络的服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBandwidthDetail(showBandwidthDetailRequest?: ShowBandwidthDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (showBandwidthDetailRequest !== null && showBandwidthDetailRequest !== undefined) {
                if (showBandwidthDetailRequest instanceof ShowBandwidthDetailRequest) {
                    offset = showBandwidthDetailRequest.offset;
                    limit = showBandwidthDetailRequest.limit;
                } else {
                    offset = showBandwidthDetailRequest['offset'];
                    limit = showBandwidthDetailRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云手机的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudPhoneDetail(showCloudPhoneDetailRequest?: ShowCloudPhoneDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/phones/{phone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let phoneId;

            if (showCloudPhoneDetailRequest !== null && showCloudPhoneDetailRequest !== undefined) {
                if (showCloudPhoneDetailRequest instanceof ShowCloudPhoneDetailRequest) {
                    phoneId = showCloudPhoneDetailRequest.phoneId;
                } else {
                    phoneId = showCloudPhoneDetailRequest['phone_id'];
                }
            }

        
            if (phoneId === null || phoneId === undefined) {
            throw new RequiredError('phoneId','Required parameter phoneId was null or undefined when calling showCloudPhoneDetail.');
            }

            options.pathParams = { 'phone_id': phoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据server_id查询云手机服务器的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudPhoneServerDetail(showCloudPhoneServerDetailRequest?: ShowCloudPhoneServerDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showCloudPhoneServerDetailRequest !== null && showCloudPhoneServerDetailRequest !== undefined) {
                if (showCloudPhoneServerDetailRequest instanceof ShowCloudPhoneServerDetailRequest) {
                    serverId = showCloudPhoneServerDetailRequest.serverId;
                } else {
                    serverId = showCloudPhoneServerDetailRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showCloudPhoneServerDetail.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-phone/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                } else {
                    jobId = showJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量关闭云手机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopCloudPhone(stopCloudPhoneRequest?: StopCloudPhoneRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopCloudPhoneRequest !== null && stopCloudPhoneRequest !== undefined) {
                if (stopCloudPhoneRequest instanceof StopCloudPhoneRequest) {
                    body = stopCloudPhoneRequest.body
                } else {
                    body = stopCloudPhoneRequest['body'];
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
         * 修改云手机使用的共享带宽大小，本接口只适用于使用系统定义网络的服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBandwidth(updateBandwidthRequest?: UpdateBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloud-phone/bandwidths/{band_width_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let bandWidthId;

            if (updateBandwidthRequest !== null && updateBandwidthRequest !== undefined) {
                if (updateBandwidthRequest instanceof UpdateBandwidthRequest) {
                    bandWidthId = updateBandwidthRequest.bandWidthId;
                    body = updateBandwidthRequest.body
                } else {
                    bandWidthId = updateBandwidthRequest['band_width_id'];
                    body = updateBandwidthRequest['body'];
                }
            }

        
            if (bandWidthId === null || bandWidthId === undefined) {
            throw new RequiredError('bandWidthId','Required parameter bandWidthId was null or undefined when calling updateBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'band_width_id': bandWidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部分云手机属性开放更新能力，部分属性无法更新，部分属性需要重启手机生效，属性约束请云手机属性列表。如果手机处于异常状态，属性更新后需恢复手机状态为运行中才可生效。该接口为异步接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCloudPhoneProperty(updateCloudPhonePropertyRequest?: UpdateCloudPhonePropertyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/batch-update-property",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateCloudPhonePropertyRequest !== null && updateCloudPhonePropertyRequest !== undefined) {
                if (updateCloudPhonePropertyRequest instanceof UpdateCloudPhonePropertyRequest) {
                    body = updateCloudPhonePropertyRequest.body
                } else {
                    body = updateCloudPhonePropertyRequest['body'];
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
         * 用户收到共享镜像后，选择接受或拒绝共享镜像。未接受的共享镜像无法使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateImageMember(updateImageMemberRequest?: UpdateImageMemberRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloud-phone/images/{image_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let imageId;

            if (updateImageMemberRequest !== null && updateImageMemberRequest !== undefined) {
                if (updateImageMemberRequest instanceof UpdateImageMemberRequest) {
                    imageId = updateImageMemberRequest.imageId;
                    body = updateImageMemberRequest.body
                } else {
                    imageId = updateImageMemberRequest['image_id'];
                    body = updateImageMemberRequest['body'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling updateImageMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改连接云手机的密钥对。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeypair(updateKeypairRequest?: UpdateKeypairRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloud-phone/servers/open-access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateKeypairRequest !== null && updateKeypairRequest !== undefined) {
                if (updateKeypairRequest instanceof UpdateKeypairRequest) {
                    body = updateKeypairRequest.body
                } else {
                    body = updateKeypairRequest['body'];
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
         * 根据phoneId修改phoneName。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePhoneName(updatePhoneNameRequest?: UpdatePhoneNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloud-phone/phones/{phone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let phoneId;

            if (updatePhoneNameRequest !== null && updatePhoneNameRequest !== undefined) {
                if (updatePhoneNameRequest instanceof UpdatePhoneNameRequest) {
                    phoneId = updatePhoneNameRequest.phoneId;
                    body = updatePhoneNameRequest.body
                } else {
                    phoneId = updatePhoneNameRequest['phone_id'];
                    body = updatePhoneNameRequest['body'];
                }
            }

        
            if (phoneId === null || phoneId === undefined) {
            throw new RequiredError('phoneId','Required parameter phoneId was null or undefined when calling updatePhoneName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'phone_id': phoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据serverId修改serverName。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerName(updateServerNameRequest?: UpdateServerNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloud-phone/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateServerNameRequest !== null && updateServerNameRequest !== undefined) {
                if (updateServerNameRequest instanceof UpdateServerNameRequest) {
                    serverId = updateServerNameRequest.serverId;
                    body = updateServerNameRequest.body
                } else {
                    serverId = updateServerNameRequest['server_id'];
                    body = updateServerNameRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在云手机中安装apk。系统会将指定的apk文件下载后直接安装到云手机中。
         * 支持安装单apk应用和多apk应用。可使用install命令安装单apk应用，一次只支持安装一个apk，如果一次传多个apk只有第一个安装成功；可使用install-multiple命令安装多apk应用（多apk应用为单个应用拆分成多个apk），一次只支持同一个应用的多个apk。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
         * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
         * - 允许安装的apk大小限制为2G（即不可将obs桶内大于2G的apk安装到手机中），超过限制将返回错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        installApk(installApkRequest?: InstallApkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (installApkRequest !== null && installApkRequest !== undefined) {
                if (installApkRequest instanceof InstallApkRequest) {
                    body = installApkRequest.body
                } else {
                    body = installApkRequest['body'];
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
         * 推送文件到云手机文件系统中。系统会将所指定的文件下载解压后，将解压后的内容全部推送到云手机的根目录下。只支持指定tar格式的文件进行推送，您需要将tar文件提前上传至您的OBS桶中。该接口为异步接口。[接口调用前请先确保已完成CPH服务操作OBS桶的委托授权。委托CPH操作OBS桶请参见[委托CPH操作OBS桶](https://support.huaweicloud.com/bestpractice-cph/cph_bp_0050.html)。](tag:hws)
         * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
         * - 允许推送的文件大小限制为6G（即不可将obs桶内大于6G的文件推送到手机中），超过限制将返回错误。
         * - 手机的系统有限制，推送到系统盘不保证推送成功，推荐把文件推送到手机的数据盘。所以在构建\&quot;tar\&quot;文件时，应将待推送的文件放到本地创建的data目录后将其打包（如tar -cvf data.tar data ），以确保把文件推送到手机的数据盘下。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pushFile(pushFileRequest?: PushFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (pushFileRequest !== null && pushFileRequest !== undefined) {
                if (pushFileRequest instanceof PushFileRequest) {
                    body = pushFileRequest.body
                } else {
                    body = pushFileRequest['body'];
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
         * 在云手机中执行shell命令。该接口为异步接口。
         * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runShellCommand(runShellCommandRequest?: RunShellCommandRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runShellCommandRequest !== null && runShellCommandRequest !== undefined) {
                if (runShellCommandRequest instanceof RunShellCommandRequest) {
                    body = runShellCommandRequest.body
                } else {
                    body = runShellCommandRequest['body'];
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
         * 在云手机中同步执行命令并返回命令执行的输出信息，该接口仅支持adb shell命令的执行。1分钟内每个用户调用接口次数上限为6次，每个云手机允许执行命令超时时间为2秒，接口时间不超过30秒，执行云手机数越多，接口耗时相应越长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runSyncCommand(runSyncCommandRequest?: RunSyncCommandRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/sync-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runSyncCommandRequest !== null && runSyncCommandRequest !== undefined) {
                if (runSyncCommandRequest instanceof RunSyncCommandRequest) {
                    body = runSyncCommandRequest.body
                } else {
                    body = runSyncCommandRequest['body'];
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
         * 在云手机中卸载apk。该接口为异步接口。
         * - 管理面性能有限，对相同服务器批量执行的ADB命令，将会阻塞云手机其他任务执行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uninstallApk(uninstallApkRequest?: UninstallApkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-phone/phones/commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (uninstallApkRequest !== null && uninstallApkRequest !== undefined) {
                if (uninstallApkRequest instanceof UninstallApkRequest) {
                    body = uninstallApkRequest.body
                } else {
                    body = uninstallApkRequest['body'];
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
    
    }
};

function newClient(client: HcClient): CphClient {
    return new CphClient(client);
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