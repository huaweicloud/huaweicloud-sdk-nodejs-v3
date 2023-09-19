import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AggTag } from './model/AggTag';
import { AssociateBandwidthPackage } from './model/AssociateBandwidthPackage';
import { AssociateBandwidthPackageRequest } from './model/AssociateBandwidthPackageRequest';
import { AssociateBandwidthPackageRequestBody } from './model/AssociateBandwidthPackageRequestBody';
import { AssociateBandwidthPackageResponse } from './model/AssociateBandwidthPackageResponse';
import { Authorisation } from './model/Authorisation';
import { BandwidthPackage } from './model/BandwidthPackage';
import { BatchCreateDeleteTagsRequest } from './model/BatchCreateDeleteTagsRequest';
import { BatchCreateDeleteTagsResponse } from './model/BatchCreateDeleteTagsResponse';
import { CloudConnection } from './model/CloudConnection';
import { CloudConnectionRoute } from './model/CloudConnectionRoute';
import { CreateAuthorisation } from './model/CreateAuthorisation';
import { CreateAuthorisationRequest } from './model/CreateAuthorisationRequest';
import { CreateAuthorisationRequestBody } from './model/CreateAuthorisationRequestBody';
import { CreateAuthorisationResponse } from './model/CreateAuthorisationResponse';
import { CreateBandwidthPackage } from './model/CreateBandwidthPackage';
import { CreateBandwidthPackageRequest } from './model/CreateBandwidthPackageRequest';
import { CreateBandwidthPackageRequestBody } from './model/CreateBandwidthPackageRequestBody';
import { CreateBandwidthPackageResponse } from './model/CreateBandwidthPackageResponse';
import { CreateCloudConnection } from './model/CreateCloudConnection';
import { CreateCloudConnectionRequest } from './model/CreateCloudConnectionRequest';
import { CreateCloudConnectionRequestBody } from './model/CreateCloudConnectionRequestBody';
import { CreateCloudConnectionResponse } from './model/CreateCloudConnectionResponse';
import { CreateInterRegionBandwidth } from './model/CreateInterRegionBandwidth';
import { CreateInterRegionBandwidthRequest } from './model/CreateInterRegionBandwidthRequest';
import { CreateInterRegionBandwidthRequestBody } from './model/CreateInterRegionBandwidthRequestBody';
import { CreateInterRegionBandwidthResponse } from './model/CreateInterRegionBandwidthResponse';
import { CreateNetworkInstance } from './model/CreateNetworkInstance';
import { CreateNetworkInstanceRequest } from './model/CreateNetworkInstanceRequest';
import { CreateNetworkInstanceRequestBody } from './model/CreateNetworkInstanceRequestBody';
import { CreateNetworkInstanceResponse } from './model/CreateNetworkInstanceResponse';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagRequestBody } from './model/CreateTagRequestBody';
import { CreateTagResponse } from './model/CreateTagResponse';
import { DeleteAuthorisationRequest } from './model/DeleteAuthorisationRequest';
import { DeleteAuthorisationResponse } from './model/DeleteAuthorisationResponse';
import { DeleteBandwidthPackageRequest } from './model/DeleteBandwidthPackageRequest';
import { DeleteBandwidthPackageResponse } from './model/DeleteBandwidthPackageResponse';
import { DeleteCloudConnectionRequest } from './model/DeleteCloudConnectionRequest';
import { DeleteCloudConnectionResponse } from './model/DeleteCloudConnectionResponse';
import { DeleteInterRegionBandwidthRequest } from './model/DeleteInterRegionBandwidthRequest';
import { DeleteInterRegionBandwidthResponse } from './model/DeleteInterRegionBandwidthResponse';
import { DeleteNetworkInstanceRequest } from './model/DeleteNetworkInstanceRequest';
import { DeleteNetworkInstanceResponse } from './model/DeleteNetworkInstanceResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { DisassociateBandwidthPackage } from './model/DisassociateBandwidthPackage';
import { DisassociateBandwidthPackageRequest } from './model/DisassociateBandwidthPackageRequest';
import { DisassociateBandwidthPackageRequestBody } from './model/DisassociateBandwidthPackageRequestBody';
import { DisassociateBandwidthPackageResponse } from './model/DisassociateBandwidthPackageResponse';
import { FilterTagResource } from './model/FilterTagResource';
import { InterRegion } from './model/InterRegion';
import { InterRegionBandwidth } from './model/InterRegionBandwidth';
import { ListAuthorisationsRequest } from './model/ListAuthorisationsRequest';
import { ListAuthorisationsResponse } from './model/ListAuthorisationsResponse';
import { ListBandwidthPackagesRequest } from './model/ListBandwidthPackagesRequest';
import { ListBandwidthPackagesResponse } from './model/ListBandwidthPackagesResponse';
import { ListCloudConnectionRoutesRequest } from './model/ListCloudConnectionRoutesRequest';
import { ListCloudConnectionRoutesResponse } from './model/ListCloudConnectionRoutesResponse';
import { ListCloudConnectionsRequest } from './model/ListCloudConnectionsRequest';
import { ListCloudConnectionsResponse } from './model/ListCloudConnectionsResponse';
import { ListDomainTagsRequest } from './model/ListDomainTagsRequest';
import { ListDomainTagsResponse } from './model/ListDomainTagsResponse';
import { ListInterRegionBandwidthsRequest } from './model/ListInterRegionBandwidthsRequest';
import { ListInterRegionBandwidthsResponse } from './model/ListInterRegionBandwidthsResponse';
import { ListNetworkInstancesRequest } from './model/ListNetworkInstancesRequest';
import { ListNetworkInstancesResponse } from './model/ListNetworkInstancesResponse';
import { ListPermissionsRequest } from './model/ListPermissionsRequest';
import { ListPermissionsResponse } from './model/ListPermissionsResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListResourceByFilterTagRequest } from './model/ListResourceByFilterTagRequest';
import { ListResourceByFilterTagRequestBody } from './model/ListResourceByFilterTagRequestBody';
import { ListResourceByFilterTagResponse } from './model/ListResourceByFilterTagResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { NetworkInstance } from './model/NetworkInstance';
import { PageInfo } from './model/PageInfo';
import { Permission } from './model/Permission';
import { Quota } from './model/Quota';
import { ShowBandwidthPackageRequest } from './model/ShowBandwidthPackageRequest';
import { ShowBandwidthPackageResponse } from './model/ShowBandwidthPackageResponse';
import { ShowCloudConnectionRequest } from './model/ShowCloudConnectionRequest';
import { ShowCloudConnectionResponse } from './model/ShowCloudConnectionResponse';
import { ShowCloudConnectionRoutesRequest } from './model/ShowCloudConnectionRoutesRequest';
import { ShowCloudConnectionRoutesResponse } from './model/ShowCloudConnectionRoutesResponse';
import { ShowInterRegionBandwidthRequest } from './model/ShowInterRegionBandwidthRequest';
import { ShowInterRegionBandwidthResponse } from './model/ShowInterRegionBandwidthResponse';
import { ShowNetworkInstanceRequest } from './model/ShowNetworkInstanceRequest';
import { ShowNetworkInstanceResponse } from './model/ShowNetworkInstanceResponse';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { UpdateAuthorisation } from './model/UpdateAuthorisation';
import { UpdateAuthorisationRequest } from './model/UpdateAuthorisationRequest';
import { UpdateAuthorisationRequestBody } from './model/UpdateAuthorisationRequestBody';
import { UpdateAuthorisationResponse } from './model/UpdateAuthorisationResponse';
import { UpdateBandwidthPackage } from './model/UpdateBandwidthPackage';
import { UpdateBandwidthPackageRequest } from './model/UpdateBandwidthPackageRequest';
import { UpdateBandwidthPackageRequestBody } from './model/UpdateBandwidthPackageRequestBody';
import { UpdateBandwidthPackageResponse } from './model/UpdateBandwidthPackageResponse';
import { UpdateCloudConnection } from './model/UpdateCloudConnection';
import { UpdateCloudConnectionRequest } from './model/UpdateCloudConnectionRequest';
import { UpdateCloudConnectionRequestBody } from './model/UpdateCloudConnectionRequestBody';
import { UpdateCloudConnectionResponse } from './model/UpdateCloudConnectionResponse';
import { UpdateInterRegionBandwidth } from './model/UpdateInterRegionBandwidth';
import { UpdateInterRegionBandwidthRequest } from './model/UpdateInterRegionBandwidthRequest';
import { UpdateInterRegionBandwidthRequestBody } from './model/UpdateInterRegionBandwidthRequestBody';
import { UpdateInterRegionBandwidthResponse } from './model/UpdateInterRegionBandwidthResponse';
import { UpdateNetworkInstance } from './model/UpdateNetworkInstance';
import { UpdateNetworkInstanceRequest } from './model/UpdateNetworkInstanceRequest';
import { UpdateNetworkInstanceRequestBody } from './model/UpdateNetworkInstanceRequestBody';
import { UpdateNetworkInstanceResponse } from './model/UpdateNetworkInstanceResponse';

export class CcClient {
    public static newBuilder(): ClientBuilder<CcClient> {
            return new ClientBuilder<CcClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 网络实例所属租户授予云连接实例所属租户加载其网络实例的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建授权
     * @param {CreateAuthorisationRequestBody} createAuthorisationRequestBody 创建授权的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorisation(createAuthorisationRequest?: CreateAuthorisationRequest): Promise<CreateAuthorisationResponse> {
        const options = ParamCreater().createAuthorisation(createAuthorisationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络实例所属租户取消授予云连接实例所属租户加载其网络实例的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除授权
     * @param {string} id 授权ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuthorisation(deleteAuthorisationRequest?: DeleteAuthorisationRequest): Promise<DeleteAuthorisationResponse> {
        const options = ParamCreater().deleteAuthorisation(deleteAuthorisationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络实例所属租户查看其已经授予其他租户的权限。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询授权列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [id] 根据ID过滤授权列表。
     * @param {Array<string>} [name] 根据名称过滤授权列表。
     * @param {Array<string>} [description] 根据描述过滤授权列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接实例ID过滤授权列表。
     * @param {Array<'ACTIVE'>} [instanceId] 根据实例ID过滤授权列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorisations(listAuthorisationsRequest?: ListAuthorisationsRequest): Promise<ListAuthorisationsResponse> {
        const options = ParamCreater().listAuthorisations(listAuthorisationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云连接实例所属租户查询其可加载其他租户的网络实例权限。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [id] 根据ID过滤授权列表。
     * @param {Array<string>} [name] 根据名称过滤授权列表。
     * @param {Array<string>} [description] 根据描述过滤授权列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接实例ID过滤授权列表。
     * @param {Array<string>} [instanceId] 根据实例ID过滤授权列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissions(listPermissionsRequest?: ListPermissionsRequest): Promise<ListPermissionsResponse> {
        const options = ParamCreater().listPermissions(listPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新授权实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新授权
     * @param {string} id 授权实例ID。
     * @param {UpdateAuthorisationRequestBody} updateAuthorisationRequestBody 更新授权实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuthorisation(updateAuthorisationRequest?: UpdateAuthorisationRequest): Promise<UpdateAuthorisationResponse> {
        const options = ParamCreater().updateAuthorisation(updateAuthorisationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将带宽包实例绑定到云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将带宽包实例绑定到云连接实例
     * @param {string} id 带宽包实例ID。
     * @param {AssociateBandwidthPackageRequestBody} associateBandwidthPackageRequestBody 将带宽包实例关联到资源的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateBandwidthPackage(associateBandwidthPackageRequest?: AssociateBandwidthPackageRequest): Promise<AssociateBandwidthPackageResponse> {
        const options = ParamCreater().associateBandwidthPackage(associateBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建带宽包实例
     * @param {CreateBandwidthPackageRequestBody} createBandwidthPackageRequestBody 创建带宽包实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBandwidthPackage(createBandwidthPackageRequest?: CreateBandwidthPackageRequest): Promise<CreateBandwidthPackageResponse> {
        const options = ParamCreater().createBandwidthPackage(createBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除带宽包实例
     * @param {string} id 带宽包实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBandwidthPackage(deleteBandwidthPackageRequest?: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse> {
        const options = ParamCreater().deleteBandwidthPackage(deleteBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除带宽包实例与云连接实例的绑定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除带宽包实例与云连接实例的绑定
     * @param {string} id 带宽包实例ID。
     * @param {DisassociateBandwidthPackageRequestBody} disassociateBandwidthPackageRequestBody 将带宽包实例与资源解关联的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateBandwidthPackage(disassociateBandwidthPackageRequest?: DisassociateBandwidthPackageRequest): Promise<DisassociateBandwidthPackageResponse> {
        const options = ParamCreater().disassociateBandwidthPackage(disassociateBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [id] 根据ID过滤带宽包实例列表。
     * @param {Array<string>} [name] 根据名称过滤带宽包实例列表。
     * @param {Array<'ACTIVE'>} [status] 根据状态过滤带宽包实例列表。ACTIVE：表示状态可用。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤带宽包实例列表。
     * @param {Array<string>} [billingMode] 根据计费方式过滤带宽包实例列表。
     * @param {Array<string>} [resourceId] 根据绑定的资源ID过滤带宽包实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackages(listBandwidthPackagesRequest?: ListBandwidthPackagesRequest): Promise<ListBandwidthPackagesResponse> {
        const options = ParamCreater().listBandwidthPackages(listBandwidthPackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包实例
     * @param {string} id 带宽包实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBandwidthPackage(showBandwidthPackageRequest?: ShowBandwidthPackageRequest): Promise<ShowBandwidthPackageResponse> {
        const options = ParamCreater().showBandwidthPackage(showBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新带宽包实例
     * @param {string} id 带宽包实例ID。
     * @param {UpdateBandwidthPackageRequestBody} updateBandwidthPackageRequestBody 更新带宽包实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBandwidthPackage(updateBandwidthPackageRequest?: UpdateBandwidthPackageRequest): Promise<UpdateBandwidthPackageResponse> {
        const options = ParamCreater().updateBandwidthPackage(updateBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云连接实例
     * @param {CreateCloudConnectionRequestBody} createCloudConnectionRequestBody 创建云连接实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudConnection(createCloudConnectionRequest?: CreateCloudConnectionRequest): Promise<CreateCloudConnectionResponse> {
        const options = ParamCreater().createCloudConnection(createCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云连接实例
     * @param {string} id 云连接实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudConnection(deleteCloudConnectionRequest?: DeleteCloudConnectionRequest): Promise<DeleteCloudConnectionResponse> {
        const options = ParamCreater().deleteCloudConnection(deleteCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [id] 根据ID过滤云连接实例列表。
     * @param {Array<string>} [name] 根据名称过滤云连接实例列表。
     * @param {Array<string>} [description] 根据描述过滤云连接实例列表。
     * @param {Array<'ACTIVE'>} [status] 根据状态过滤云连接实例列表。ACTIVE：表示状态可用。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤云连接实例列表。
     * @param {Array<string>} [type] 根据类型过滤云连接实例列表。
     * @param {Array<string>} [usedScene] 根据使用场景过滤云连接实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnections(listCloudConnectionsRequest?: ListCloudConnectionsRequest): Promise<ListCloudConnectionsResponse> {
        const options = ParamCreater().listCloudConnections(listCloudConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接实例
     * @param {string} id 云连接实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudConnection(showCloudConnectionRequest?: ShowCloudConnectionRequest): Promise<ShowCloudConnectionResponse> {
        const options = ParamCreater().showCloudConnection(showCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云连接实例
     * @param {string} id 云连接实例ID。
     * @param {UpdateCloudConnectionRequestBody} updateCloudConnectionRequestBody 更新云连接实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCloudConnection(updateCloudConnectionRequest?: UpdateCloudConnectionRequest): Promise<UpdateCloudConnectionResponse> {
        const options = ParamCreater().updateCloudConnection(updateCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接路由条目列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接路由条目列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {string} [id] 根据云连接路由ID过滤云连接路由条目列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接实例ID过滤云连接路由条目列表。
     * @param {Array<string>} [instanceId] 根据网络实例ID过滤云连接路由条目列表。
     * @param {string} [regionId] 根据Region ID过滤云连接路由条目列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnectionRoutes(listCloudConnectionRoutesRequest?: ListCloudConnectionRoutesRequest): Promise<ListCloudConnectionRoutesResponse> {
        const options = ParamCreater().listCloudConnectionRoutes(listCloudConnectionRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接路由条目列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接路由条目详情
     * @param {string} id 云连接路由实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudConnectionRoutes(showCloudConnectionRoutesRequest?: ShowCloudConnectionRoutesRequest): Promise<ShowCloudConnectionRoutesResponse> {
        const options = ParamCreater().showCloudConnectionRoutes(showCloudConnectionRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建域间带宽实例
     * @param {CreateInterRegionBandwidthRequestBody} createInterRegionBandwidthRequestBody 创建域间带宽实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInterRegionBandwidth(createInterRegionBandwidthRequest?: CreateInterRegionBandwidthRequest): Promise<CreateInterRegionBandwidthResponse> {
        const options = ParamCreater().createInterRegionBandwidth(createInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域间带宽实例
     * @param {string} id 域间带宽实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInterRegionBandwidth(deleteInterRegionBandwidthRequest?: DeleteInterRegionBandwidthRequest): Promise<DeleteInterRegionBandwidthResponse> {
        const options = ParamCreater().deleteInterRegionBandwidth(deleteInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域间带宽列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域间带宽列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [id] 根据ID过滤域间带宽实例列表。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤域间带宽实例列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接ID过滤域间带宽实例列表。
     * @param {Array<string>} [bandwidthPackageId] 根据带宽包列表过滤域间带宽实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInterRegionBandwidths(listInterRegionBandwidthsRequest?: ListInterRegionBandwidthsRequest): Promise<ListInterRegionBandwidthsResponse> {
        const options = ParamCreater().listInterRegionBandwidths(listInterRegionBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域间带宽实例
     * @param {string} id 域间带宽实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInterRegionBandwidth(showInterRegionBandwidthRequest?: ShowInterRegionBandwidthRequest): Promise<ShowInterRegionBandwidthResponse> {
        const options = ParamCreater().showInterRegionBandwidth(showInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新域间带宽实例
     * @param {string} id 域间带宽实例ID。
     * @param {UpdateInterRegionBandwidthRequestBody} updateInterRegionBandwidthRequestBody 更新域间带宽实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInterRegionBandwidth(updateInterRegionBandwidthRequest?: UpdateInterRegionBandwidthRequest): Promise<UpdateInterRegionBandwidthResponse> {
        const options = ParamCreater().updateInterRegionBandwidth(updateInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络实例
     * @param {CreateNetworkInstanceRequestBody} createNetworkInstanceRequestBody 创建网络实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNetworkInstance(createNetworkInstanceRequest?: CreateNetworkInstanceRequest): Promise<CreateNetworkInstanceResponse> {
        const options = ParamCreater().createNetworkInstance(createNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络实例
     * @param {string} id 网络实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNetworkInstance(deleteNetworkInstanceRequest?: DeleteNetworkInstanceRequest): Promise<DeleteNetworkInstanceResponse> {
        const options = ParamCreater().deleteNetworkInstance(deleteNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络实例列表
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [id] 根据ID过滤网络实例列表。
     * @param {Array<string>} [name] 根据名称过滤网络实例列表。
     * @param {Array<string>} [description] 根据描述过滤网络实例列表。
     * @param {Array<'ACTIVE'>} [status] 根据状态过滤网络实例列表。ACTIVE：表示状态可用。
     * @param {Array<string>} [type] 根据类型过滤网络实例列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接实例ID过滤网络实例列表。
     * @param {Array<string>} [instanceId] 根据网络实例ID过滤网络实例列表。
     * @param {Array<string>} [regionId] 根据网络实例所在的Region过滤网络实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNetworkInstances(listNetworkInstancesRequest?: ListNetworkInstancesRequest): Promise<ListNetworkInstancesResponse> {
        const options = ParamCreater().listNetworkInstances(listNetworkInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络实例
     * @param {string} id 网络实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkInstance(showNetworkInstanceRequest?: ShowNetworkInstanceRequest): Promise<ShowNetworkInstanceResponse> {
        const options = ParamCreater().showNetworkInstance(showNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络实例
     * @param {string} id 网络实例ID。
     * @param {UpdateNetworkInstanceRequestBody} updateNetworkInstanceRequestBody 更新网络实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNetworkInstance(updateNetworkInstanceRequest?: UpdateNetworkInstanceRequest): Promise<UpdateNetworkInstanceResponse> {
        const options = ParamCreater().updateNetworkInstance(updateNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {'cloud_connection' | 'cloud_connection_region' | 'cloud_connection_route' | 'region_network_instance'} quotaType 配额类型： - cloud_connection: 可加载的云连接实例数 - cloud_connection_region: 某云连接实例下可加载的Region数 - cloud_connection_route: 某云连接实例下可加载的路由数 - region_network_instance: 某云连接实例下某个Region下可加载的网络实例数
     * @param {number} [limit] 分页查询时，每页返回的个数。
     * @param {string} [marker] 分页查询时，上一页最后一条记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
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
     * 批量创建和删除标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建和删除资源标签
     * @param {string} resourceId 资源ID
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {Tags} [batchCreateDeleteTagsRequestBody] 待更新/添加/删除的资源标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDeleteTags(batchCreateDeleteTagsRequest?: BatchCreateDeleteTagsRequest): Promise<BatchCreateDeleteTagsResponse> {
        const options = ParamCreater().batchCreateDeleteTags(batchCreateDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源标签
     * @param {string} resourceId 资源ID。
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {CreateTagRequestBody} [createTagRequestBody] 待添加/更新的资源标签
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
     * @param {string} resourceId 资源ID
     * @param {string} tagKey 待删除资源标签的key
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
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
     * 查询账户资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户资源标签
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainTags(listDomainTagsRequest?: ListDomainTagsRequest): Promise<ListDomainTagsResponse> {
        const options = ParamCreater().listDomainTags(listDomainTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {ListResourceByFilterTagRequestBody} [listResourceByFilterTagRequestBody] 查询资源实例的过滤条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceByFilterTag(listResourceByFilterTagRequest?: ListResourceByFilterTagRequest): Promise<ListResourceByFilterTagResponse> {
        const options = ParamCreater().listResourceByFilterTag(listResourceByFilterTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags(listTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 网络实例所属租户授予云连接实例所属租户加载其网络实例的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorisation(createAuthorisationRequest?: CreateAuthorisationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/authorisations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAuthorisationRequest !== null && createAuthorisationRequest !== undefined) {
                if (createAuthorisationRequest instanceof CreateAuthorisationRequest) {
                    body = createAuthorisationRequest.body
                } else {
                    body = createAuthorisationRequest['body'];
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
         * 网络实例所属租户取消授予云连接实例所属租户加载其网络实例的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuthorisation(deleteAuthorisationRequest?: DeleteAuthorisationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/authorisations/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteAuthorisationRequest !== null && deleteAuthorisationRequest !== undefined) {
                if (deleteAuthorisationRequest instanceof DeleteAuthorisationRequest) {
                    id = deleteAuthorisationRequest.id;
                } else {
                    id = deleteAuthorisationRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuthorisation.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络实例所属租户查看其已经授予其他租户的权限。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorisations(listAuthorisationsRequest?: ListAuthorisationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/authorisations",
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
            
            let name;
            
            let description;
            
            let cloudConnectionId;
            
            let instanceId;

            if (listAuthorisationsRequest !== null && listAuthorisationsRequest !== undefined) {
                if (listAuthorisationsRequest instanceof ListAuthorisationsRequest) {
                    limit = listAuthorisationsRequest.limit;
                    marker = listAuthorisationsRequest.marker;
                    id = listAuthorisationsRequest.id;
                    name = listAuthorisationsRequest.name;
                    description = listAuthorisationsRequest.description;
                    cloudConnectionId = listAuthorisationsRequest.cloudConnectionId;
                    instanceId = listAuthorisationsRequest.instanceId;
                } else {
                    limit = listAuthorisationsRequest['limit'];
                    marker = listAuthorisationsRequest['marker'];
                    id = listAuthorisationsRequest['id'];
                    name = listAuthorisationsRequest['name'];
                    description = listAuthorisationsRequest['description'];
                    cloudConnectionId = listAuthorisationsRequest['cloud_connection_id'];
                    instanceId = listAuthorisationsRequest['instance_id'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云连接实例所属租户查询其可加载其他租户的网络实例权限。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissions(listPermissionsRequest?: ListPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/permissions",
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
            
            let name;
            
            let description;
            
            let cloudConnectionId;
            
            let instanceId;

            if (listPermissionsRequest !== null && listPermissionsRequest !== undefined) {
                if (listPermissionsRequest instanceof ListPermissionsRequest) {
                    limit = listPermissionsRequest.limit;
                    marker = listPermissionsRequest.marker;
                    id = listPermissionsRequest.id;
                    name = listPermissionsRequest.name;
                    description = listPermissionsRequest.description;
                    cloudConnectionId = listPermissionsRequest.cloudConnectionId;
                    instanceId = listPermissionsRequest.instanceId;
                } else {
                    limit = listPermissionsRequest['limit'];
                    marker = listPermissionsRequest['marker'];
                    id = listPermissionsRequest['id'];
                    name = listPermissionsRequest['name'];
                    description = listPermissionsRequest['description'];
                    cloudConnectionId = listPermissionsRequest['cloud_connection_id'];
                    instanceId = listPermissionsRequest['instance_id'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新授权实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuthorisation(updateAuthorisationRequest?: UpdateAuthorisationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/authorisations/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateAuthorisationRequest !== null && updateAuthorisationRequest !== undefined) {
                if (updateAuthorisationRequest instanceof UpdateAuthorisationRequest) {
                    id = updateAuthorisationRequest.id;
                    body = updateAuthorisationRequest.body
                } else {
                    id = updateAuthorisationRequest['id'];
                    body = updateAuthorisationRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAuthorisation.');
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
         * 将带宽包实例绑定到云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateBandwidthPackage(associateBandwidthPackageRequest?: AssociateBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}/associate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (associateBandwidthPackageRequest !== null && associateBandwidthPackageRequest !== undefined) {
                if (associateBandwidthPackageRequest instanceof AssociateBandwidthPackageRequest) {
                    id = associateBandwidthPackageRequest.id;
                    body = associateBandwidthPackageRequest.body
                } else {
                    id = associateBandwidthPackageRequest['id'];
                    body = associateBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling associateBandwidthPackage.');
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
         * 创建带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBandwidthPackage(createBandwidthPackageRequest?: CreateBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createBandwidthPackageRequest !== null && createBandwidthPackageRequest !== undefined) {
                if (createBandwidthPackageRequest instanceof CreateBandwidthPackageRequest) {
                    body = createBandwidthPackageRequest.body
                } else {
                    body = createBandwidthPackageRequest['body'];
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
         * 删除带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBandwidthPackage(deleteBandwidthPackageRequest?: DeleteBandwidthPackageRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteBandwidthPackageRequest !== null && deleteBandwidthPackageRequest !== undefined) {
                if (deleteBandwidthPackageRequest instanceof DeleteBandwidthPackageRequest) {
                    id = deleteBandwidthPackageRequest.id;
                } else {
                    id = deleteBandwidthPackageRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteBandwidthPackage.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除带宽包实例与云连接实例的绑定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateBandwidthPackage(disassociateBandwidthPackageRequest?: DisassociateBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}/disassociate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (disassociateBandwidthPackageRequest !== null && disassociateBandwidthPackageRequest !== undefined) {
                if (disassociateBandwidthPackageRequest instanceof DisassociateBandwidthPackageRequest) {
                    id = disassociateBandwidthPackageRequest.id;
                    body = disassociateBandwidthPackageRequest.body
                } else {
                    id = disassociateBandwidthPackageRequest['id'];
                    body = disassociateBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling disassociateBandwidthPackage.');
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
         * 查询带宽包列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackages(listBandwidthPackagesRequest?: ListBandwidthPackagesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages",
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
            
            let name;
            
            let status;
            
            let enterpriseProjectId;
            
            let billingMode;
            
            let resourceId;

            if (listBandwidthPackagesRequest !== null && listBandwidthPackagesRequest !== undefined) {
                if (listBandwidthPackagesRequest instanceof ListBandwidthPackagesRequest) {
                    limit = listBandwidthPackagesRequest.limit;
                    marker = listBandwidthPackagesRequest.marker;
                    id = listBandwidthPackagesRequest.id;
                    name = listBandwidthPackagesRequest.name;
                    status = listBandwidthPackagesRequest.status;
                    enterpriseProjectId = listBandwidthPackagesRequest.enterpriseProjectId;
                    billingMode = listBandwidthPackagesRequest.billingMode;
                    resourceId = listBandwidthPackagesRequest.resourceId;
                } else {
                    limit = listBandwidthPackagesRequest['limit'];
                    marker = listBandwidthPackagesRequest['marker'];
                    id = listBandwidthPackagesRequest['id'];
                    name = listBandwidthPackagesRequest['name'];
                    status = listBandwidthPackagesRequest['status'];
                    enterpriseProjectId = listBandwidthPackagesRequest['enterprise_project_id'];
                    billingMode = listBandwidthPackagesRequest['billing_mode'];
                    resourceId = listBandwidthPackagesRequest['resource_id'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (billingMode !== null && billingMode !== undefined) {
                localVarQueryParameter['billing_mode'] = billingMode;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBandwidthPackage(showBandwidthPackageRequest?: ShowBandwidthPackageRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showBandwidthPackageRequest !== null && showBandwidthPackageRequest !== undefined) {
                if (showBandwidthPackageRequest instanceof ShowBandwidthPackageRequest) {
                    id = showBandwidthPackageRequest.id;
                } else {
                    id = showBandwidthPackageRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showBandwidthPackage.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBandwidthPackage(updateBandwidthPackageRequest?: UpdateBandwidthPackageRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateBandwidthPackageRequest !== null && updateBandwidthPackageRequest !== undefined) {
                if (updateBandwidthPackageRequest instanceof UpdateBandwidthPackageRequest) {
                    id = updateBandwidthPackageRequest.id;
                    body = updateBandwidthPackageRequest.body
                } else {
                    id = updateBandwidthPackageRequest['id'];
                    body = updateBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateBandwidthPackage.');
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
         * 创建云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudConnection(createCloudConnectionRequest?: CreateCloudConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/cloud-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCloudConnectionRequest !== null && createCloudConnectionRequest !== undefined) {
                if (createCloudConnectionRequest instanceof CreateCloudConnectionRequest) {
                    body = createCloudConnectionRequest.body
                } else {
                    body = createCloudConnectionRequest['body'];
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
         * 删除云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudConnection(deleteCloudConnectionRequest?: DeleteCloudConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteCloudConnectionRequest !== null && deleteCloudConnectionRequest !== undefined) {
                if (deleteCloudConnectionRequest instanceof DeleteCloudConnectionRequest) {
                    id = deleteCloudConnectionRequest.id;
                } else {
                    id = deleteCloudConnectionRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCloudConnection.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnections(listCloudConnectionsRequest?: ListCloudConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connections",
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
            
            let name;
            
            let description;
            
            let status;
            
            let enterpriseProjectId;
            
            let type;
            
            let usedScene;

            if (listCloudConnectionsRequest !== null && listCloudConnectionsRequest !== undefined) {
                if (listCloudConnectionsRequest instanceof ListCloudConnectionsRequest) {
                    limit = listCloudConnectionsRequest.limit;
                    marker = listCloudConnectionsRequest.marker;
                    id = listCloudConnectionsRequest.id;
                    name = listCloudConnectionsRequest.name;
                    description = listCloudConnectionsRequest.description;
                    status = listCloudConnectionsRequest.status;
                    enterpriseProjectId = listCloudConnectionsRequest.enterpriseProjectId;
                    type = listCloudConnectionsRequest.type;
                    usedScene = listCloudConnectionsRequest.usedScene;
                } else {
                    limit = listCloudConnectionsRequest['limit'];
                    marker = listCloudConnectionsRequest['marker'];
                    id = listCloudConnectionsRequest['id'];
                    name = listCloudConnectionsRequest['name'];
                    description = listCloudConnectionsRequest['description'];
                    status = listCloudConnectionsRequest['status'];
                    enterpriseProjectId = listCloudConnectionsRequest['enterprise_project_id'];
                    type = listCloudConnectionsRequest['type'];
                    usedScene = listCloudConnectionsRequest['used_scene'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (usedScene !== null && usedScene !== undefined) {
                localVarQueryParameter['used_scene'] = usedScene;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudConnection(showCloudConnectionRequest?: ShowCloudConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showCloudConnectionRequest !== null && showCloudConnectionRequest !== undefined) {
                if (showCloudConnectionRequest instanceof ShowCloudConnectionRequest) {
                    id = showCloudConnectionRequest.id;
                } else {
                    id = showCloudConnectionRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCloudConnection.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCloudConnection(updateCloudConnectionRequest?: UpdateCloudConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateCloudConnectionRequest !== null && updateCloudConnectionRequest !== undefined) {
                if (updateCloudConnectionRequest instanceof UpdateCloudConnectionRequest) {
                    id = updateCloudConnectionRequest.id;
                    body = updateCloudConnectionRequest.body
                } else {
                    id = updateCloudConnectionRequest['id'];
                    body = updateCloudConnectionRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateCloudConnection.');
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
         * 查询云连接路由条目列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnectionRoutes(listCloudConnectionRoutesRequest?: ListCloudConnectionRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connection-routes",
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
            
            let cloudConnectionId;
            
            let instanceId;
            
            let regionId;

            if (listCloudConnectionRoutesRequest !== null && listCloudConnectionRoutesRequest !== undefined) {
                if (listCloudConnectionRoutesRequest instanceof ListCloudConnectionRoutesRequest) {
                    limit = listCloudConnectionRoutesRequest.limit;
                    marker = listCloudConnectionRoutesRequest.marker;
                    id = listCloudConnectionRoutesRequest.id;
                    cloudConnectionId = listCloudConnectionRoutesRequest.cloudConnectionId;
                    instanceId = listCloudConnectionRoutesRequest.instanceId;
                    regionId = listCloudConnectionRoutesRequest.regionId;
                } else {
                    limit = listCloudConnectionRoutesRequest['limit'];
                    marker = listCloudConnectionRoutesRequest['marker'];
                    id = listCloudConnectionRoutesRequest['id'];
                    cloudConnectionId = listCloudConnectionRoutesRequest['cloud_connection_id'];
                    instanceId = listCloudConnectionRoutesRequest['instance_id'];
                    regionId = listCloudConnectionRoutesRequest['region_id'];
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
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接路由条目列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudConnectionRoutes(showCloudConnectionRoutesRequest?: ShowCloudConnectionRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connection-routes/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showCloudConnectionRoutesRequest !== null && showCloudConnectionRoutesRequest !== undefined) {
                if (showCloudConnectionRoutesRequest instanceof ShowCloudConnectionRoutesRequest) {
                    id = showCloudConnectionRoutesRequest.id;
                } else {
                    id = showCloudConnectionRoutesRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCloudConnectionRoutes.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInterRegionBandwidth(createInterRegionBandwidthRequest?: CreateInterRegionBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInterRegionBandwidthRequest !== null && createInterRegionBandwidthRequest !== undefined) {
                if (createInterRegionBandwidthRequest instanceof CreateInterRegionBandwidthRequest) {
                    body = createInterRegionBandwidthRequest.body
                } else {
                    body = createInterRegionBandwidthRequest['body'];
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
         * 删除域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInterRegionBandwidth(deleteInterRegionBandwidthRequest?: DeleteInterRegionBandwidthRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteInterRegionBandwidthRequest !== null && deleteInterRegionBandwidthRequest !== undefined) {
                if (deleteInterRegionBandwidthRequest instanceof DeleteInterRegionBandwidthRequest) {
                    id = deleteInterRegionBandwidthRequest.id;
                } else {
                    id = deleteInterRegionBandwidthRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteInterRegionBandwidth.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域间带宽列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInterRegionBandwidths(listInterRegionBandwidthsRequest?: ListInterRegionBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths",
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
            
            let enterpriseProjectId;
            
            let cloudConnectionId;
            
            let bandwidthPackageId;

            if (listInterRegionBandwidthsRequest !== null && listInterRegionBandwidthsRequest !== undefined) {
                if (listInterRegionBandwidthsRequest instanceof ListInterRegionBandwidthsRequest) {
                    limit = listInterRegionBandwidthsRequest.limit;
                    marker = listInterRegionBandwidthsRequest.marker;
                    id = listInterRegionBandwidthsRequest.id;
                    enterpriseProjectId = listInterRegionBandwidthsRequest.enterpriseProjectId;
                    cloudConnectionId = listInterRegionBandwidthsRequest.cloudConnectionId;
                    bandwidthPackageId = listInterRegionBandwidthsRequest.bandwidthPackageId;
                } else {
                    limit = listInterRegionBandwidthsRequest['limit'];
                    marker = listInterRegionBandwidthsRequest['marker'];
                    id = listInterRegionBandwidthsRequest['id'];
                    enterpriseProjectId = listInterRegionBandwidthsRequest['enterprise_project_id'];
                    cloudConnectionId = listInterRegionBandwidthsRequest['cloud_connection_id'];
                    bandwidthPackageId = listInterRegionBandwidthsRequest['bandwidth_package_id'];
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (bandwidthPackageId !== null && bandwidthPackageId !== undefined) {
                localVarQueryParameter['bandwidth_package_id'] = bandwidthPackageId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInterRegionBandwidth(showInterRegionBandwidthRequest?: ShowInterRegionBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showInterRegionBandwidthRequest !== null && showInterRegionBandwidthRequest !== undefined) {
                if (showInterRegionBandwidthRequest instanceof ShowInterRegionBandwidthRequest) {
                    id = showInterRegionBandwidthRequest.id;
                } else {
                    id = showInterRegionBandwidthRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showInterRegionBandwidth.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInterRegionBandwidth(updateInterRegionBandwidthRequest?: UpdateInterRegionBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateInterRegionBandwidthRequest !== null && updateInterRegionBandwidthRequest !== undefined) {
                if (updateInterRegionBandwidthRequest instanceof UpdateInterRegionBandwidthRequest) {
                    id = updateInterRegionBandwidthRequest.id;
                    body = updateInterRegionBandwidthRequest.body
                } else {
                    id = updateInterRegionBandwidthRequest['id'];
                    body = updateInterRegionBandwidthRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateInterRegionBandwidth.');
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
         * 创建网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNetworkInstance(createNetworkInstanceRequest?: CreateNetworkInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/network-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNetworkInstanceRequest !== null && createNetworkInstanceRequest !== undefined) {
                if (createNetworkInstanceRequest instanceof CreateNetworkInstanceRequest) {
                    body = createNetworkInstanceRequest.body
                } else {
                    body = createNetworkInstanceRequest['body'];
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
         * 删除网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNetworkInstance(deleteNetworkInstanceRequest?: DeleteNetworkInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/network-instances/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteNetworkInstanceRequest !== null && deleteNetworkInstanceRequest !== undefined) {
                if (deleteNetworkInstanceRequest instanceof DeleteNetworkInstanceRequest) {
                    id = deleteNetworkInstanceRequest.id;
                } else {
                    id = deleteNetworkInstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNetworkInstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNetworkInstances(listNetworkInstancesRequest?: ListNetworkInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/network-instances",
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
            
            let name;
            
            let description;
            
            let status;
            
            let type;
            
            let cloudConnectionId;
            
            let instanceId;
            
            let regionId;

            if (listNetworkInstancesRequest !== null && listNetworkInstancesRequest !== undefined) {
                if (listNetworkInstancesRequest instanceof ListNetworkInstancesRequest) {
                    limit = listNetworkInstancesRequest.limit;
                    marker = listNetworkInstancesRequest.marker;
                    id = listNetworkInstancesRequest.id;
                    name = listNetworkInstancesRequest.name;
                    description = listNetworkInstancesRequest.description;
                    status = listNetworkInstancesRequest.status;
                    type = listNetworkInstancesRequest.type;
                    cloudConnectionId = listNetworkInstancesRequest.cloudConnectionId;
                    instanceId = listNetworkInstancesRequest.instanceId;
                    regionId = listNetworkInstancesRequest.regionId;
                } else {
                    limit = listNetworkInstancesRequest['limit'];
                    marker = listNetworkInstancesRequest['marker'];
                    id = listNetworkInstancesRequest['id'];
                    name = listNetworkInstancesRequest['name'];
                    description = listNetworkInstancesRequest['description'];
                    status = listNetworkInstancesRequest['status'];
                    type = listNetworkInstancesRequest['type'];
                    cloudConnectionId = listNetworkInstancesRequest['cloud_connection_id'];
                    instanceId = listNetworkInstancesRequest['instance_id'];
                    regionId = listNetworkInstancesRequest['region_id'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkInstance(showNetworkInstanceRequest?: ShowNetworkInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/network-instances/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showNetworkInstanceRequest !== null && showNetworkInstanceRequest !== undefined) {
                if (showNetworkInstanceRequest instanceof ShowNetworkInstanceRequest) {
                    id = showNetworkInstanceRequest.id;
                } else {
                    id = showNetworkInstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showNetworkInstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNetworkInstance(updateNetworkInstanceRequest?: UpdateNetworkInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/network-instances/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateNetworkInstanceRequest !== null && updateNetworkInstanceRequest !== undefined) {
                if (updateNetworkInstanceRequest instanceof UpdateNetworkInstanceRequest) {
                    id = updateNetworkInstanceRequest.id;
                    body = updateNetworkInstanceRequest.body
                } else {
                    id = updateNetworkInstanceRequest['id'];
                    body = updateNetworkInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateNetworkInstance.');
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
         * 查询配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let quotaType;
            
            let limit;
            
            let marker;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    quotaType = listQuotasRequest.quotaType;
                    limit = listQuotasRequest.limit;
                    marker = listQuotasRequest.marker;
                } else {
                    quotaType = listQuotasRequest['quota_type'];
                    limit = listQuotasRequest['limit'];
                    marker = listQuotasRequest['marker'];
                }
            }

        
            if (quotaType === null || quotaType === undefined) {
                throw new RequiredError('quotaType','Required parameter quotaType was null or undefined when calling listQuotas.');
            }
            if (quotaType !== null && quotaType !== undefined) {
                localVarQueryParameter['quota_type'] = quotaType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建和删除标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDeleteTags(batchCreateDeleteTagsRequest?: BatchCreateDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags/action",
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

            if (batchCreateDeleteTagsRequest !== null && batchCreateDeleteTagsRequest !== undefined) {
                if (batchCreateDeleteTagsRequest instanceof BatchCreateDeleteTagsRequest) {
                    resourceId = batchCreateDeleteTagsRequest.resourceId;
                    resourceType = batchCreateDeleteTagsRequest.resourceType;
                    body = batchCreateDeleteTagsRequest.body
                } else {
                    resourceId = batchCreateDeleteTagsRequest['resource_id'];
                    resourceType = batchCreateDeleteTagsRequest['resource_type'];
                    body = batchCreateDeleteTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateDeleteTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateDeleteTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTag(createTagRequest?: CreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags",
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

            if (createTagRequest !== null && createTagRequest !== undefined) {
                if (createTagRequest instanceof CreateTagRequest) {
                    resourceId = createTagRequest.resourceId;
                    resourceType = createTagRequest.resourceType;
                    body = createTagRequest.body
                } else {
                    resourceId = createTagRequest['resource_id'];
                    resourceType = createTagRequest['resource_type'];
                    body = createTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
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
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;
            
            let resourceType;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    resourceId = deleteTagRequest.resourceId;
                    tagKey = deleteTagRequest.tagKey;
                    resourceType = deleteTagRequest.resourceType;
                } else {
                    resourceId = deleteTagRequest['resource_id'];
                    tagKey = deleteTagRequest['tag_key'];
                    resourceType = deleteTagRequest['resource_type'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainTags(listDomainTagsRequest?: ListDomainTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listDomainTagsRequest !== null && listDomainTagsRequest !== undefined) {
                if (listDomainTagsRequest instanceof ListDomainTagsRequest) {
                    resourceType = listDomainTagsRequest.resourceType;
                } else {
                    resourceType = listDomainTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listDomainTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceByFilterTag(listResourceByFilterTagRequest?: ListResourceByFilterTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/{resource_type}/resource-instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (listResourceByFilterTagRequest !== null && listResourceByFilterTagRequest !== undefined) {
                if (listResourceByFilterTagRequest instanceof ListResourceByFilterTagRequest) {
                    resourceType = listResourceByFilterTagRequest.resourceType;
                    body = listResourceByFilterTagRequest.body
                } else {
                    resourceType = listResourceByFilterTagRequest['resource_type'];
                    body = listResourceByFilterTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceByFilterTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags(listTagsRequest?: ListTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listTagsRequest !== null && listTagsRequest !== undefined) {
                if (listTagsRequest instanceof ListTagsRequest) {
                    resourceType = listTagsRequest.resourceType;
                    resourceId = listTagsRequest.resourceId;
                } else {
                    resourceType = listTagsRequest['resource_type'];
                    resourceId = listTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CcClient {
    return new CcClient(client);
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