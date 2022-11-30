import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddExtendCidrOption } from './model/AddExtendCidrOption';
import { AddVpcExtendCidrRequest } from './model/AddVpcExtendCidrRequest';
import { AddVpcExtendCidrRequestBody } from './model/AddVpcExtendCidrRequestBody';
import { AddVpcExtendCidrResponse } from './model/AddVpcExtendCidrResponse';
import { AddressGroup } from './model/AddressGroup';
import { BatchCreateSubNetworkInterfaceOption } from './model/BatchCreateSubNetworkInterfaceOption';
import { BatchCreateSubNetworkInterfaceRequest } from './model/BatchCreateSubNetworkInterfaceRequest';
import { BatchCreateSubNetworkInterfaceRequestBody } from './model/BatchCreateSubNetworkInterfaceRequestBody';
import { BatchCreateSubNetworkInterfaceResponse } from './model/BatchCreateSubNetworkInterfaceResponse';
import { CloudResource } from './model/CloudResource';
import { CreateAddressGroupOption } from './model/CreateAddressGroupOption';
import { CreateAddressGroupRequest } from './model/CreateAddressGroupRequest';
import { CreateAddressGroupRequestBody } from './model/CreateAddressGroupRequestBody';
import { CreateAddressGroupResponse } from './model/CreateAddressGroupResponse';
import { CreateSecurityGroupOption } from './model/CreateSecurityGroupOption';
import { CreateSecurityGroupRequest } from './model/CreateSecurityGroupRequest';
import { CreateSecurityGroupRequestBody } from './model/CreateSecurityGroupRequestBody';
import { CreateSecurityGroupResponse } from './model/CreateSecurityGroupResponse';
import { CreateSecurityGroupRuleOption } from './model/CreateSecurityGroupRuleOption';
import { CreateSecurityGroupRuleRequest } from './model/CreateSecurityGroupRuleRequest';
import { CreateSecurityGroupRuleRequestBody } from './model/CreateSecurityGroupRuleRequestBody';
import { CreateSecurityGroupRuleResponse } from './model/CreateSecurityGroupRuleResponse';
import { CreateSubNetworkInterfaceOption } from './model/CreateSubNetworkInterfaceOption';
import { CreateSubNetworkInterfaceRequest } from './model/CreateSubNetworkInterfaceRequest';
import { CreateSubNetworkInterfaceRequestBody } from './model/CreateSubNetworkInterfaceRequestBody';
import { CreateSubNetworkInterfaceResponse } from './model/CreateSubNetworkInterfaceResponse';
import { CreateVpcOption } from './model/CreateVpcOption';
import { CreateVpcRequest } from './model/CreateVpcRequest';
import { CreateVpcRequestBody } from './model/CreateVpcRequestBody';
import { CreateVpcResponse } from './model/CreateVpcResponse';
import { DeleteAddressGroupRequest } from './model/DeleteAddressGroupRequest';
import { DeleteAddressGroupResponse } from './model/DeleteAddressGroupResponse';
import { DeleteIpAddressGroupForceRequest } from './model/DeleteIpAddressGroupForceRequest';
import { DeleteIpAddressGroupForceResponse } from './model/DeleteIpAddressGroupForceResponse';
import { DeleteSecurityGroupRequest } from './model/DeleteSecurityGroupRequest';
import { DeleteSecurityGroupResponse } from './model/DeleteSecurityGroupResponse';
import { DeleteSecurityGroupRuleRequest } from './model/DeleteSecurityGroupRuleRequest';
import { DeleteSecurityGroupRuleResponse } from './model/DeleteSecurityGroupRuleResponse';
import { DeleteSubNetworkInterfaceRequest } from './model/DeleteSubNetworkInterfaceRequest';
import { DeleteSubNetworkInterfaceResponse } from './model/DeleteSubNetworkInterfaceResponse';
import { DeleteVpcRequest } from './model/DeleteVpcRequest';
import { DeleteVpcResponse } from './model/DeleteVpcResponse';
import { ListAddressGroupRequest } from './model/ListAddressGroupRequest';
import { ListAddressGroupResponse } from './model/ListAddressGroupResponse';
import { ListSecurityGroupRulesRequest } from './model/ListSecurityGroupRulesRequest';
import { ListSecurityGroupRulesResponse } from './model/ListSecurityGroupRulesResponse';
import { ListSecurityGroupsRequest } from './model/ListSecurityGroupsRequest';
import { ListSecurityGroupsResponse } from './model/ListSecurityGroupsResponse';
import { ListSubNetworkInterfacesRequest } from './model/ListSubNetworkInterfacesRequest';
import { ListSubNetworkInterfacesResponse } from './model/ListSubNetworkInterfacesResponse';
import { ListVpcsRequest } from './model/ListVpcsRequest';
import { ListVpcsResponse } from './model/ListVpcsResponse';
import { MigrateSubNetworkInterfaceOption } from './model/MigrateSubNetworkInterfaceOption';
import { MigrateSubNetworkInterfaceRequest } from './model/MigrateSubNetworkInterfaceRequest';
import { MigrateSubNetworkInterfaceRequestBody } from './model/MigrateSubNetworkInterfaceRequestBody';
import { MigrateSubNetworkInterfaceResponse } from './model/MigrateSubNetworkInterfaceResponse';
import { PageInfo } from './model/PageInfo';
import { RemoveExtendCidrOption } from './model/RemoveExtendCidrOption';
import { RemoveVpcExtendCidrRequest } from './model/RemoveVpcExtendCidrRequest';
import { RemoveVpcExtendCidrRequestBody } from './model/RemoveVpcExtendCidrRequestBody';
import { RemoveVpcExtendCidrResponse } from './model/RemoveVpcExtendCidrResponse';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroupInfo } from './model/SecurityGroupInfo';
import { SecurityGroupRule } from './model/SecurityGroupRule';
import { ShowAddressGroupRequest } from './model/ShowAddressGroupRequest';
import { ShowAddressGroupResponse } from './model/ShowAddressGroupResponse';
import { ShowSecurityGroupRequest } from './model/ShowSecurityGroupRequest';
import { ShowSecurityGroupResponse } from './model/ShowSecurityGroupResponse';
import { ShowSecurityGroupRuleRequest } from './model/ShowSecurityGroupRuleRequest';
import { ShowSecurityGroupRuleResponse } from './model/ShowSecurityGroupRuleResponse';
import { ShowSubNetworkInterfaceRequest } from './model/ShowSubNetworkInterfaceRequest';
import { ShowSubNetworkInterfaceResponse } from './model/ShowSubNetworkInterfaceResponse';
import { ShowSubNetworkInterfacesQuantityRequest } from './model/ShowSubNetworkInterfacesQuantityRequest';
import { ShowSubNetworkInterfacesQuantityResponse } from './model/ShowSubNetworkInterfacesQuantityResponse';
import { ShowVpcRequest } from './model/ShowVpcRequest';
import { ShowVpcResponse } from './model/ShowVpcResponse';
import { SubNetworkInterface } from './model/SubNetworkInterface';
import { Tag } from './model/Tag';
import { UpdateAddressGroupOption } from './model/UpdateAddressGroupOption';
import { UpdateAddressGroupRequest } from './model/UpdateAddressGroupRequest';
import { UpdateAddressGroupRequestBody } from './model/UpdateAddressGroupRequestBody';
import { UpdateAddressGroupResponse } from './model/UpdateAddressGroupResponse';
import { UpdateSecurityGroupOption } from './model/UpdateSecurityGroupOption';
import { UpdateSecurityGroupRequest } from './model/UpdateSecurityGroupRequest';
import { UpdateSecurityGroupRequestBody } from './model/UpdateSecurityGroupRequestBody';
import { UpdateSecurityGroupResponse } from './model/UpdateSecurityGroupResponse';
import { UpdateSubNetworkInterfaceOption } from './model/UpdateSubNetworkInterfaceOption';
import { UpdateSubNetworkInterfaceRequest } from './model/UpdateSubNetworkInterfaceRequest';
import { UpdateSubNetworkInterfaceRequestBody } from './model/UpdateSubNetworkInterfaceRequestBody';
import { UpdateSubNetworkInterfaceResponse } from './model/UpdateSubNetworkInterfaceResponse';
import { UpdateVpcOption } from './model/UpdateVpcOption';
import { UpdateVpcRequest } from './model/UpdateVpcRequest';
import { UpdateVpcRequestBody } from './model/UpdateVpcRequestBody';
import { UpdateVpcResponse } from './model/UpdateVpcResponse';
import { Vpc } from './model/Vpc';

export class VpcClient {
    public static newBuilder(): ClientBuilder<VpcClient> {
        return new ClientBuilder<VpcClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 批量创建辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建辅助弹性网卡
     * @param {BatchCreateSubNetworkInterfaceRequestBody} batchCreateSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSubNetworkInterface(batchCreateSubNetworkInterfaceRequest?: BatchCreateSubNetworkInterfaceRequest): Promise<BatchCreateSubNetworkInterfaceResponse> {
        const options = ParamCreater().batchCreateSubNetworkInterface(batchCreateSubNetworkInterfaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组
     * @param {CreateSecurityGroupRequestBody} createSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
        const options = ParamCreater().createSecurityGroup(createSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组规则
     * @param {CreateSecurityGroupRuleRequestBody} createSecurityGroupRuleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest): Promise<CreateSecurityGroupRuleResponse> {
        const options = ParamCreater().createSecurityGroupRule(createSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建辅助弹性网卡
     * @param {CreateSubNetworkInterfaceRequestBody} createSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubNetworkInterface(createSubNetworkInterfaceRequest?: CreateSubNetworkInterfaceRequest): Promise<CreateSubNetworkInterfaceResponse> {
        const options = ParamCreater().createSubNetworkInterface(createSubNetworkInterfaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组
     * @param {string} securityGroupId 安全组资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().deleteSecurityGroup(deleteSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组规则
     * @param {string} securityGroupRuleId 安全组规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest): Promise<void> {
        const options = ParamCreater().deleteSecurityGroupRule(deleteSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除辅助弹性网卡
     * @param {string} subNetworkInterfaceId 弹性辅助网卡唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubNetworkInterface(deleteSubNetworkInterfaceRequest?: DeleteSubNetworkInterfaceRequest): Promise<void> {
        const options = ParamCreater().deleteSubNetworkInterface(deleteSubNetworkInterfaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全组规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则列表
     * @param {number} [limit] 功能说明：每页返回个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 功能说明：安全组规则ID，支持多个ID过滤
     * @param {Array<string>} [securityGroupId] 功能说明：安全组规则所属安全组ID，支持多个ID过滤
     * @param {Array<string>} [protocol] 功能说明：安全组规则协议，支持多条过滤
     * @param {Array<string>} [description] 功能说明：安全组规则的描述，支持多个描述同时过滤
     * @param {Array<string>} [remoteGroupId] 功能说明：远端安全组ID，支持多ID过滤
     * @param {string} [direction] 功能说明：安全组规则方向
     * @param {string} [action] 功能说明：安全组规则生效策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest): Promise<ListSecurityGroupRulesResponse> {
        const options = ParamCreater().listSecurityGroupRules(listSecurityGroupRulesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某租户下的安全组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 功能说明：安全组资源ID。可以使用该字段精确过滤安全组，支持多个ID
     * @param {Array<string>} [name] 功能说明：安全组名称。可以使用该字段精确过滤满足条件的安全组，支持传入多个name过滤
     * @param {Array<string>} [description] 功能说明：安全组描述新增。可以使用该字段精确过滤安全组，支持传入多个描述进行过滤
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的安全组。 取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。 约束：若需要查询当前用户所有有权限查看企业项目绑定的安全组，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
        const options = ParamCreater().listSecurityGroups(listSecurityGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助弹性网卡列表，单次查询最多返回2000条数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下辅助弹性网卡列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 功能说明：辅助弹性网卡ID，支持多ID过滤 使用场景：查询需要的多个辅助弹性网卡信息
     * @param {Array<string>} [virsubnetId] 功能说明：辅助弹性网卡所属虚拟子网的ID，支持多个ID过滤 使用场景：过滤需要的单个或者多个虚拟子网下的辅助弹性网卡
     * @param {Array<string>} [privateIpAddress] 功能说明：辅助弹性网卡的私有IPv4地址，支持多个地址同时过滤 使用场景：通过单个或者多个ip地址过滤查询辅助弹性网卡
     * @param {Array<string>} [macAddress] 功能说明：辅助弹性网卡的mac地址，支持多个同时过滤 使用场景：使用mac地址精确过滤辅助弹性网卡
     * @param {Array<string>} [vpcId] 功能说明：辅助弹性网卡所属的VPC_ID，支持多ID过滤 使用场景：过滤单个或多个VPC下的辅助弹性网卡信息
     * @param {Array<string>} [description] 功能说明：辅助弹性网卡的描述信息，支持多个同时过滤 使用场景：通过描述信息过滤辅助弹性网卡
     * @param {Array<string>} [parentId] 功能说明：辅助弹性网卡的宿主网卡的ID，支持多ID过滤 使用场景：过滤单个或多个宿主网卡下存在的辅助弹性网卡
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubNetworkInterfaces(listSubNetworkInterfacesRequest?: ListSubNetworkInterfacesRequest): Promise<ListSubNetworkInterfacesResponse> {
        const options = ParamCreater().listSubNetworkInterfaces(listSubNetworkInterfacesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量迁移辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移辅助弹性网卡
     * @param {MigrateSubNetworkInterfaceRequestBody} migrateSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateSubNetworkInterface(migrateSubNetworkInterfaceRequest?: MigrateSubNetworkInterfaceRequest): Promise<MigrateSubNetworkInterfaceResponse> {
        const options = ParamCreater().migrateSubNetworkInterface(migrateSubNetworkInterfaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个安全组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组
     * @param {string} securityGroupId 安全组资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest): Promise<ShowSecurityGroupResponse> {
        const options = ParamCreater().showSecurityGroup(showSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则
     * @param {string} securityGroupRuleId 安全组规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest): Promise<ShowSecurityGroupRuleResponse> {
        const options = ParamCreater().showSecurityGroupRule(showSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助弹性网卡详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下辅助弹性网卡
     * @param {string} subNetworkInterfaceId 辅助弹性网卡的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubNetworkInterface(showSubNetworkInterfaceRequest?: ShowSubNetworkInterfaceRequest): Promise<ShowSubNetworkInterfaceResponse> {
        const options = ParamCreater().showSubNetworkInterface(showSubNetworkInterfaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助弹性网卡数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下辅助弹性网卡数目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubNetworkInterfacesQuantity(): Promise<ShowSubNetworkInterfacesQuantityResponse> {
        const options = ParamCreater().showSubNetworkInterfacesQuantity();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新安全组
     * @param {string} securityGroupId 安全组ID
     * @param {UpdateSecurityGroupRequestBody} updateSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest): Promise<UpdateSecurityGroupResponse> {
        const options = ParamCreater().updateSecurityGroup(updateSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新辅助弹性网卡
     * @param {string} subNetworkInterfaceId 辅助弹性网卡的唯一标识
     * @param {UpdateSubNetworkInterfaceRequestBody} updateSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubNetworkInterface(updateSubNetworkInterfaceRequest?: UpdateSubNetworkInterfaceRequest): Promise<UpdateSubNetworkInterfaceResponse> {
        const options = ParamCreater().updateSubNetworkInterface(updateSubNetworkInterfaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建地址组
     * @param {CreateAddressGroupRequestBody} createAddressGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAddressGroup(createAddressGroupRequest?: CreateAddressGroupRequest): Promise<CreateAddressGroupResponse> {
        const options = ParamCreater().createAddressGroup(createAddressGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除地址组，非强制删除，删除前请确保未被其他资源引用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地址组
     * @param {string} addressGroupId 地址组的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddressGroup(deleteAddressGroupRequest?: DeleteAddressGroupRequest): Promise<void> {
        const options = ParamCreater().deleteAddressGroup(deleteAddressGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 强制删除地址组，删除的地址组与安全组规则关联时，会删除地址组与关联的安全组规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 强制删除地址组
     * @param {string} addressGroupId IP地址组的唯一标识，要删除的IP地址组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIpAddressGroupForce(deleteIpAddressGroupForceRequest?: DeleteIpAddressGroupForceRequest): Promise<void> {
        const options = ParamCreater().deleteIpAddressGroupForce(deleteIpAddressGroupForceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组列表，根据过滤条件进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0~2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 地址组唯一标识，填写后接口按照id进行过滤，支持多ID同时过滤
     * @param {Array<string>} [name] 地址组名称，填写后按照名称进行过滤，支持多名称同时过滤
     * @param {number} [ipVersion] IP地址组ip版本，当前只支持ipv4，填写后按照ip版本进行过滤
     * @param {Array<string>} [description] 地址组描述信息，填写后按照地址组描述信息过滤，支持多描述同时过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressGroup(listAddressGroupRequest?: ListAddressGroupRequest): Promise<ListAddressGroupResponse> {
        const options = ParamCreater().listAddressGroup(listAddressGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组
     * @param {string} addressGroupId 地址组的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAddressGroup(showAddressGroupRequest?: ShowAddressGroupRequest): Promise<ShowAddressGroupResponse> {
        const options = ParamCreater().showAddressGroup(showAddressGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新地址组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新地址组
     * @param {string} addressGroupId 地址组的唯一标识
     * @param {UpdateAddressGroupRequestBody} updateAddressGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAddressGroup(updateAddressGroupRequest?: UpdateAddressGroupRequest): Promise<UpdateAddressGroupResponse> {
        const options = ParamCreater().updateAddressGroup(updateAddressGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加VPC的扩展网段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加VPC扩展网段
     * @param {string} vpcId VPC资源ID
     * @param {AddVpcExtendCidrRequestBody} addVpcExtendCidrRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addVpcExtendCidr(addVpcExtendCidrRequest?: AddVpcExtendCidrRequest): Promise<AddVpcExtendCidrResponse> {
        const options = ParamCreater().addVpcExtendCidr(addVpcExtendCidrRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建虚拟私有云
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC
     * @param {CreateVpcRequestBody} createVpcRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpc(createVpcRequest?: CreateVpcRequest): Promise<CreateVpcResponse> {
        const options = ParamCreater().createVpc(createVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除VPC
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC
     * @param {string} vpcId VPC的资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpc(deleteVpcRequest?: DeleteVpcRequest): Promise<void> {
        const options = ParamCreater().deleteVpc(deleteVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询vpc列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] VPC资源ID。可以使用该字段过滤VPC
     * @param {Array<string>} [name] VPC的name信息，可以使用该字段过滤VPC
     * @param {Array<string>} [description] VPC的描述信息。可以使用该字段过滤VPC
     * @param {Array<string>} [cidr] VPC的CIDR。可以使用该字段过滤VPC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcs(listVpcsRequest?: ListVpcsRequest): Promise<ListVpcsResponse> {
        const options = ParamCreater().listVpcs(listVpcsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除VPC扩展网段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除VPC扩展网段
     * @param {string} vpcId VPC资源ID
     * @param {RemoveVpcExtendCidrRequestBody} removeVpcExtendCidrRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeVpcExtendCidr(removeVpcExtendCidrRequest?: RemoveVpcExtendCidrRequest): Promise<RemoveVpcExtendCidrResponse> {
        const options = ParamCreater().removeVpcExtendCidr(removeVpcExtendCidrRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询vpc详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC详情
     * @param {string} vpcId VPC资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpc(showVpcRequest?: ShowVpcRequest): Promise<ShowVpcResponse> {
        const options = ParamCreater().showVpc(showVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新vpc
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPC
     * @param {string} vpcId VPC资源ID
     * @param {UpdateVpcRequestBody} updateVpcRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpc(updateVpcRequest?: UpdateVpcRequest): Promise<UpdateVpcResponse> {
        const options = ParamCreater().updateVpc(updateVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量创建辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSubNetworkInterface(batchCreateSubNetworkInterfaceRequest?: BatchCreateSubNetworkInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchCreateSubNetworkInterfaceRequest !== null && batchCreateSubNetworkInterfaceRequest !== undefined) {
                if (batchCreateSubNetworkInterfaceRequest instanceof BatchCreateSubNetworkInterfaceRequest) {
                    body = batchCreateSubNetworkInterfaceRequest.body
                } else {
                    body = batchCreateSubNetworkInterfaceRequest['body'];
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
         * 创建安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSecurityGroupRequest !== null && createSecurityGroupRequest !== undefined) {
                if (createSecurityGroupRequest instanceof CreateSecurityGroupRequest) {
                    body = createSecurityGroupRequest.body
                } else {
                    body = createSecurityGroupRequest['body'];
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
         * 创建安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSecurityGroupRuleRequest !== null && createSecurityGroupRuleRequest !== undefined) {
                if (createSecurityGroupRuleRequest instanceof CreateSecurityGroupRuleRequest) {
                    body = createSecurityGroupRuleRequest.body
                } else {
                    body = createSecurityGroupRuleRequest['body'];
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
         * 创建辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubNetworkInterface(createSubNetworkInterfaceRequest?: CreateSubNetworkInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/sub-network-interfaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSubNetworkInterfaceRequest !== null && createSubNetworkInterfaceRequest !== undefined) {
                if (createSubNetworkInterfaceRequest instanceof CreateSubNetworkInterfaceRequest) {
                    body = createSubNetworkInterfaceRequest.body
                } else {
                    body = createSubNetworkInterfaceRequest['body'];
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
         * 删除安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupId;

            if (deleteSecurityGroupRequest !== null && deleteSecurityGroupRequest !== undefined) {
                if (deleteSecurityGroupRequest instanceof DeleteSecurityGroupRequest) {
                    securityGroupId = deleteSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = deleteSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling deleteSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupRuleId;

            if (deleteSecurityGroupRuleRequest !== null && deleteSecurityGroupRuleRequest !== undefined) {
                if (deleteSecurityGroupRuleRequest instanceof DeleteSecurityGroupRuleRequest) {
                    securityGroupRuleId = deleteSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = deleteSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling deleteSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubNetworkInterface(deleteSubNetworkInterfaceRequest?: DeleteSubNetworkInterfaceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/{sub_network_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let subNetworkInterfaceId;

            if (deleteSubNetworkInterfaceRequest !== null && deleteSubNetworkInterfaceRequest !== undefined) {
                if (deleteSubNetworkInterfaceRequest instanceof DeleteSubNetworkInterfaceRequest) {
                    subNetworkInterfaceId = deleteSubNetworkInterfaceRequest.subNetworkInterfaceId;
                } else {
                    subNetworkInterfaceId = deleteSubNetworkInterfaceRequest['sub_network_interface_id'];
                }
            }

        
            if (subNetworkInterfaceId === null || subNetworkInterfaceId === undefined) {
            throw new RequiredError('subNetworkInterfaceId','Required parameter subNetworkInterfaceId was null or undefined when calling deleteSubNetworkInterface.');
            }

            options.pathParams = { 'sub_network_interface_id': subNetworkInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全组规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-group-rules",
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
            let id;
            let securityGroupId;
            let protocol;
            let description;
            let remoteGroupId;
            let direction;
            let action;

            if (listSecurityGroupRulesRequest !== null && listSecurityGroupRulesRequest !== undefined) {
                if (listSecurityGroupRulesRequest instanceof ListSecurityGroupRulesRequest) {
                    limit = listSecurityGroupRulesRequest.limit;
                    marker = listSecurityGroupRulesRequest.marker;
                    id = listSecurityGroupRulesRequest.id;
                    securityGroupId = listSecurityGroupRulesRequest.securityGroupId;
                    protocol = listSecurityGroupRulesRequest.protocol;
                    description = listSecurityGroupRulesRequest.description;
                    remoteGroupId = listSecurityGroupRulesRequest.remoteGroupId;
                    direction = listSecurityGroupRulesRequest.direction;
                    action = listSecurityGroupRulesRequest.action;
                } else {
                    limit = listSecurityGroupRulesRequest['limit'];
                    marker = listSecurityGroupRulesRequest['marker'];
                    id = listSecurityGroupRulesRequest['id'];
                    securityGroupId = listSecurityGroupRulesRequest['security_group_id'];
                    protocol = listSecurityGroupRulesRequest['protocol'];
                    description = listSecurityGroupRulesRequest['description'];
                    remoteGroupId = listSecurityGroupRulesRequest['remote_group_id'];
                    direction = listSecurityGroupRulesRequest['direction'];
                    action = listSecurityGroupRulesRequest['action'];
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
            if (securityGroupId !== null && securityGroupId !== undefined) {
                localVarQueryParameter['security_group_id'] = securityGroupId;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (remoteGroupId !== null && remoteGroupId !== undefined) {
                localVarQueryParameter['remote_group_id'] = remoteGroupId;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某租户下的安全组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-groups",
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
            let id;
            let name;
            let description;
            let enterpriseProjectId;

            if (listSecurityGroupsRequest !== null && listSecurityGroupsRequest !== undefined) {
                if (listSecurityGroupsRequest instanceof ListSecurityGroupsRequest) {
                    limit = listSecurityGroupsRequest.limit;
                    marker = listSecurityGroupsRequest.marker;
                    id = listSecurityGroupsRequest.id;
                    name = listSecurityGroupsRequest.name;
                    description = listSecurityGroupsRequest.description;
                    enterpriseProjectId = listSecurityGroupsRequest.enterpriseProjectId;
                } else {
                    limit = listSecurityGroupsRequest['limit'];
                    marker = listSecurityGroupsRequest['marker'];
                    id = listSecurityGroupsRequest['id'];
                    name = listSecurityGroupsRequest['name'];
                    description = listSecurityGroupsRequest['description'];
                    enterpriseProjectId = listSecurityGroupsRequest['enterprise_project_id'];
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询辅助弹性网卡列表，单次查询最多返回2000条数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubNetworkInterfaces(listSubNetworkInterfacesRequest?: ListSubNetworkInterfacesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/sub-network-interfaces",
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
            let id;
            let virsubnetId;
            let privateIpAddress;
            let macAddress;
            let vpcId;
            let description;
            let parentId;

            if (listSubNetworkInterfacesRequest !== null && listSubNetworkInterfacesRequest !== undefined) {
                if (listSubNetworkInterfacesRequest instanceof ListSubNetworkInterfacesRequest) {
                    limit = listSubNetworkInterfacesRequest.limit;
                    marker = listSubNetworkInterfacesRequest.marker;
                    id = listSubNetworkInterfacesRequest.id;
                    virsubnetId = listSubNetworkInterfacesRequest.virsubnetId;
                    privateIpAddress = listSubNetworkInterfacesRequest.privateIpAddress;
                    macAddress = listSubNetworkInterfacesRequest.macAddress;
                    vpcId = listSubNetworkInterfacesRequest.vpcId;
                    description = listSubNetworkInterfacesRequest.description;
                    parentId = listSubNetworkInterfacesRequest.parentId;
                } else {
                    limit = listSubNetworkInterfacesRequest['limit'];
                    marker = listSubNetworkInterfacesRequest['marker'];
                    id = listSubNetworkInterfacesRequest['id'];
                    virsubnetId = listSubNetworkInterfacesRequest['virsubnet_id'];
                    privateIpAddress = listSubNetworkInterfacesRequest['private_ip_address'];
                    macAddress = listSubNetworkInterfacesRequest['mac_address'];
                    vpcId = listSubNetworkInterfacesRequest['vpc_id'];
                    description = listSubNetworkInterfacesRequest['description'];
                    parentId = listSubNetworkInterfacesRequest['parent_id'];
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
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (privateIpAddress !== null && privateIpAddress !== undefined) {
                localVarQueryParameter['private_ip_address'] = privateIpAddress;
            }
            if (macAddress !== null && macAddress !== undefined) {
                localVarQueryParameter['mac_address'] = macAddress;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量迁移辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateSubNetworkInterface(migrateSubNetworkInterfaceRequest?: MigrateSubNetworkInterfaceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/migrate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (migrateSubNetworkInterfaceRequest !== null && migrateSubNetworkInterfaceRequest !== undefined) {
                if (migrateSubNetworkInterfaceRequest instanceof MigrateSubNetworkInterfaceRequest) {
                    body = migrateSubNetworkInterfaceRequest.body
                } else {
                    body = migrateSubNetworkInterfaceRequest['body'];
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
         * 查询单个安全组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupId;

            if (showSecurityGroupRequest !== null && showSecurityGroupRequest !== undefined) {
                if (showSecurityGroupRequest instanceof ShowSecurityGroupRequest) {
                    securityGroupId = showSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = showSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling showSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupRuleId;

            if (showSecurityGroupRuleRequest !== null && showSecurityGroupRuleRequest !== undefined) {
                if (showSecurityGroupRuleRequest instanceof ShowSecurityGroupRuleRequest) {
                    securityGroupRuleId = showSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = showSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling showSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询辅助弹性网卡详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubNetworkInterface(showSubNetworkInterfaceRequest?: ShowSubNetworkInterfaceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/{sub_network_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let subNetworkInterfaceId;

            if (showSubNetworkInterfaceRequest !== null && showSubNetworkInterfaceRequest !== undefined) {
                if (showSubNetworkInterfaceRequest instanceof ShowSubNetworkInterfaceRequest) {
                    subNetworkInterfaceId = showSubNetworkInterfaceRequest.subNetworkInterfaceId;
                } else {
                    subNetworkInterfaceId = showSubNetworkInterfaceRequest['sub_network_interface_id'];
                }
            }

        
            if (subNetworkInterfaceId === null || subNetworkInterfaceId === undefined) {
            throw new RequiredError('subNetworkInterfaceId','Required parameter subNetworkInterfaceId was null or undefined when calling showSubNetworkInterface.');
            }

            options.pathParams = { 'sub_network_interface_id': subNetworkInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询辅助弹性网卡数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubNetworkInterfacesQuantity() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/count",
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
         * 更新安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let securityGroupId;

            if (updateSecurityGroupRequest !== null && updateSecurityGroupRequest !== undefined) {
                if (updateSecurityGroupRequest instanceof UpdateSecurityGroupRequest) {
                    securityGroupId = updateSecurityGroupRequest.securityGroupId;
                    body = updateSecurityGroupRequest.body
                } else {
                    securityGroupId = updateSecurityGroupRequest['security_group_id'];
                    body = updateSecurityGroupRequest['body'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling updateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubNetworkInterface(updateSubNetworkInterfaceRequest?: UpdateSubNetworkInterfaceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/{sub_network_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let subNetworkInterfaceId;

            if (updateSubNetworkInterfaceRequest !== null && updateSubNetworkInterfaceRequest !== undefined) {
                if (updateSubNetworkInterfaceRequest instanceof UpdateSubNetworkInterfaceRequest) {
                    subNetworkInterfaceId = updateSubNetworkInterfaceRequest.subNetworkInterfaceId;
                    body = updateSubNetworkInterfaceRequest.body
                } else {
                    subNetworkInterfaceId = updateSubNetworkInterfaceRequest['sub_network_interface_id'];
                    body = updateSubNetworkInterfaceRequest['body'];
                }
            }

        
            if (subNetworkInterfaceId === null || subNetworkInterfaceId === undefined) {
            throw new RequiredError('subNetworkInterfaceId','Required parameter subNetworkInterfaceId was null or undefined when calling updateSubNetworkInterface.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sub_network_interface_id': subNetworkInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAddressGroup(createAddressGroupRequest?: CreateAddressGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/address-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createAddressGroupRequest !== null && createAddressGroupRequest !== undefined) {
                if (createAddressGroupRequest instanceof CreateAddressGroupRequest) {
                    body = createAddressGroupRequest.body
                } else {
                    body = createAddressGroupRequest['body'];
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
         * 删除地址组，非强制删除，删除前请确保未被其他资源引用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddressGroup(deleteAddressGroupRequest?: DeleteAddressGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let addressGroupId;

            if (deleteAddressGroupRequest !== null && deleteAddressGroupRequest !== undefined) {
                if (deleteAddressGroupRequest instanceof DeleteAddressGroupRequest) {
                    addressGroupId = deleteAddressGroupRequest.addressGroupId;
                } else {
                    addressGroupId = deleteAddressGroupRequest['address_group_id'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling deleteAddressGroup.');
            }

            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 强制删除地址组，删除的地址组与安全组规则关联时，会删除地址组与关联的安全组规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpAddressGroupForce(deleteIpAddressGroupForceRequest?: DeleteIpAddressGroupForceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}/force",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let addressGroupId;

            if (deleteIpAddressGroupForceRequest !== null && deleteIpAddressGroupForceRequest !== undefined) {
                if (deleteIpAddressGroupForceRequest instanceof DeleteIpAddressGroupForceRequest) {
                    addressGroupId = deleteIpAddressGroupForceRequest.addressGroupId;
                } else {
                    addressGroupId = deleteIpAddressGroupForceRequest['address_group_id'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling deleteIpAddressGroupForce.');
            }

            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组列表，根据过滤条件进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressGroup(listAddressGroupRequest?: ListAddressGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/address-groups",
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
            let id;
            let name;
            let ipVersion;
            let description;

            if (listAddressGroupRequest !== null && listAddressGroupRequest !== undefined) {
                if (listAddressGroupRequest instanceof ListAddressGroupRequest) {
                    limit = listAddressGroupRequest.limit;
                    marker = listAddressGroupRequest.marker;
                    id = listAddressGroupRequest.id;
                    name = listAddressGroupRequest.name;
                    ipVersion = listAddressGroupRequest.ipVersion;
                    description = listAddressGroupRequest.description;
                } else {
                    limit = listAddressGroupRequest['limit'];
                    marker = listAddressGroupRequest['marker'];
                    id = listAddressGroupRequest['id'];
                    name = listAddressGroupRequest['name'];
                    ipVersion = listAddressGroupRequest['ip_version'];
                    description = listAddressGroupRequest['description'];
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
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAddressGroup(showAddressGroupRequest?: ShowAddressGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let addressGroupId;

            if (showAddressGroupRequest !== null && showAddressGroupRequest !== undefined) {
                if (showAddressGroupRequest instanceof ShowAddressGroupRequest) {
                    addressGroupId = showAddressGroupRequest.addressGroupId;
                } else {
                    addressGroupId = showAddressGroupRequest['address_group_id'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling showAddressGroup.');
            }

            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新地址组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAddressGroup(updateAddressGroupRequest?: UpdateAddressGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let addressGroupId;

            if (updateAddressGroupRequest !== null && updateAddressGroupRequest !== undefined) {
                if (updateAddressGroupRequest instanceof UpdateAddressGroupRequest) {
                    addressGroupId = updateAddressGroupRequest.addressGroupId;
                    body = updateAddressGroupRequest.body
                } else {
                    addressGroupId = updateAddressGroupRequest['address_group_id'];
                    body = updateAddressGroupRequest['body'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling updateAddressGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加VPC的扩展网段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addVpcExtendCidr(addVpcExtendCidrRequest?: AddVpcExtendCidrRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}/add-extend-cidr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (addVpcExtendCidrRequest !== null && addVpcExtendCidrRequest !== undefined) {
                if (addVpcExtendCidrRequest instanceof AddVpcExtendCidrRequest) {
                    vpcId = addVpcExtendCidrRequest.vpcId;
                    body = addVpcExtendCidrRequest.body
                } else {
                    vpcId = addVpcExtendCidrRequest['vpc_id'];
                    body = addVpcExtendCidrRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling addVpcExtendCidr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建虚拟私有云
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpc(createVpcRequest?: CreateVpcRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/vpcs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcRequest !== null && createVpcRequest !== undefined) {
                if (createVpcRequest instanceof CreateVpcRequest) {
                    body = createVpcRequest.body
                } else {
                    body = createVpcRequest['body'];
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
         * 删除VPC
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpc(deleteVpcRequest?: DeleteVpcRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;

            if (deleteVpcRequest !== null && deleteVpcRequest !== undefined) {
                if (deleteVpcRequest instanceof DeleteVpcRequest) {
                    vpcId = deleteVpcRequest.vpcId;
                } else {
                    vpcId = deleteVpcRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteVpc.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询vpc列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcs(listVpcsRequest?: ListVpcsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/vpcs",
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
            let id;
            let name;
            let description;
            let cidr;

            if (listVpcsRequest !== null && listVpcsRequest !== undefined) {
                if (listVpcsRequest instanceof ListVpcsRequest) {
                    limit = listVpcsRequest.limit;
                    marker = listVpcsRequest.marker;
                    id = listVpcsRequest.id;
                    name = listVpcsRequest.name;
                    description = listVpcsRequest.description;
                    cidr = listVpcsRequest.cidr;
                } else {
                    limit = listVpcsRequest['limit'];
                    marker = listVpcsRequest['marker'];
                    id = listVpcsRequest['id'];
                    name = listVpcsRequest['name'];
                    description = listVpcsRequest['description'];
                    cidr = listVpcsRequest['cidr'];
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
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除VPC扩展网段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeVpcExtendCidr(removeVpcExtendCidrRequest?: RemoveVpcExtendCidrRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}/remove-extend-cidr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (removeVpcExtendCidrRequest !== null && removeVpcExtendCidrRequest !== undefined) {
                if (removeVpcExtendCidrRequest instanceof RemoveVpcExtendCidrRequest) {
                    vpcId = removeVpcExtendCidrRequest.vpcId;
                    body = removeVpcExtendCidrRequest.body
                } else {
                    vpcId = removeVpcExtendCidrRequest['vpc_id'];
                    body = removeVpcExtendCidrRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling removeVpcExtendCidr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询vpc详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpc(showVpcRequest?: ShowVpcRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;

            if (showVpcRequest !== null && showVpcRequest !== undefined) {
                if (showVpcRequest instanceof ShowVpcRequest) {
                    vpcId = showVpcRequest.vpcId;
                } else {
                    vpcId = showVpcRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling showVpc.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新vpc
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpc(updateVpcRequest?: UpdateVpcRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (updateVpcRequest !== null && updateVpcRequest !== undefined) {
                if (updateVpcRequest instanceof UpdateVpcRequest) {
                    vpcId = updateVpcRequest.vpcId;
                    body = updateVpcRequest.body
                } else {
                    vpcId = updateVpcRequest['vpc_id'];
                    body = updateVpcRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling updateVpc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VpcClient {
    return new VpcClient(client);
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