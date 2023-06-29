import { CreateGraphReqGraphEncryption } from './CreateGraphReqGraphEncryption';
import { CreateGraphReqGraphLtsOperationTrace } from './CreateGraphReqGraphLtsOperationTrace';
import { CreateGraphReqGraphPublicIp } from './CreateGraphReqGraphPublicIp';
import { CreateGraphReqGraphSysTags } from './CreateGraphReqGraphSysTags';
import { CreateGraphReqGraphVertexIdType } from './CreateGraphReqGraphVertexIdType';
import { ListGraphsRespTags } from './ListGraphsRespTags';


export class CreateGraphReqGraph {
    public name: string;
    private 'graph_size_type_index': string | undefined;
    public arch?: string;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'security_group_id': string | undefined;
    private 'public_ip'?: CreateGraphReqGraphPublicIp | undefined;
    private 'enable_multi_az'?: boolean | undefined;
    public encryption?: CreateGraphReqGraphEncryption;
    private 'lts_operation_trace'?: CreateGraphReqGraphLtsOperationTrace | undefined;
    private 'sys_tags'?: Array<CreateGraphReqGraphSysTags> | undefined;
    public tags?: Array<ListGraphsRespTags>;
    private 'enable_rbac'?: boolean | undefined;
    private 'enable_full_text_index'?: boolean | undefined;
    private 'enable_hyg'?: boolean | undefined;
    private 'crypt_algorithm': string | undefined;
    private 'enable_https': boolean | undefined;
    private 'product_type'?: string | undefined;
    private 'vertex_id_type'?: CreateGraphReqGraphVertexIdType | undefined;
    public constructor(name?: any, graphSizeTypeIndex?: any, vpcId?: any, subnetId?: any, securityGroupId?: any, cryptAlgorithm?: any, enableHttps?: any) { 
        this['name'] = name;
        this['graph_size_type_index'] = graphSizeTypeIndex;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['crypt_algorithm'] = cryptAlgorithm;
        this['enable_https'] = enableHttps;
    }
    public withName(name: string): CreateGraphReqGraph {
        this['name'] = name;
        return this;
    }
    public withGraphSizeTypeIndex(graphSizeTypeIndex: string): CreateGraphReqGraph {
        this['graph_size_type_index'] = graphSizeTypeIndex;
        return this;
    }
    public set graphSizeTypeIndex(graphSizeTypeIndex: string | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex() {
        return this['graph_size_type_index'];
    }
    public withArch(arch: string): CreateGraphReqGraph {
        this['arch'] = arch;
        return this;
    }
    public withVpcId(vpcId: string): CreateGraphReqGraph {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateGraphReqGraph {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateGraphReqGraph {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withPublicIp(publicIp: CreateGraphReqGraphPublicIp): CreateGraphReqGraph {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: CreateGraphReqGraphPublicIp | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withEnableMultiAz(enableMultiAz: boolean): CreateGraphReqGraph {
        this['enable_multi_az'] = enableMultiAz;
        return this;
    }
    public set enableMultiAz(enableMultiAz: boolean | undefined) {
        this['enable_multi_az'] = enableMultiAz;
    }
    public get enableMultiAz() {
        return this['enable_multi_az'];
    }
    public withEncryption(encryption: CreateGraphReqGraphEncryption): CreateGraphReqGraph {
        this['encryption'] = encryption;
        return this;
    }
    public withLtsOperationTrace(ltsOperationTrace: CreateGraphReqGraphLtsOperationTrace): CreateGraphReqGraph {
        this['lts_operation_trace'] = ltsOperationTrace;
        return this;
    }
    public set ltsOperationTrace(ltsOperationTrace: CreateGraphReqGraphLtsOperationTrace | undefined) {
        this['lts_operation_trace'] = ltsOperationTrace;
    }
    public get ltsOperationTrace() {
        return this['lts_operation_trace'];
    }
    public withSysTags(sysTags: Array<CreateGraphReqGraphSysTags>): CreateGraphReqGraph {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<CreateGraphReqGraphSysTags> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
    public withTags(tags: Array<ListGraphsRespTags>): CreateGraphReqGraph {
        this['tags'] = tags;
        return this;
    }
    public withEnableRbac(enableRbac: boolean): CreateGraphReqGraph {
        this['enable_rbac'] = enableRbac;
        return this;
    }
    public set enableRbac(enableRbac: boolean | undefined) {
        this['enable_rbac'] = enableRbac;
    }
    public get enableRbac() {
        return this['enable_rbac'];
    }
    public withEnableFullTextIndex(enableFullTextIndex: boolean): CreateGraphReqGraph {
        this['enable_full_text_index'] = enableFullTextIndex;
        return this;
    }
    public set enableFullTextIndex(enableFullTextIndex: boolean | undefined) {
        this['enable_full_text_index'] = enableFullTextIndex;
    }
    public get enableFullTextIndex() {
        return this['enable_full_text_index'];
    }
    public withEnableHyg(enableHyg: boolean): CreateGraphReqGraph {
        this['enable_hyg'] = enableHyg;
        return this;
    }
    public set enableHyg(enableHyg: boolean | undefined) {
        this['enable_hyg'] = enableHyg;
    }
    public get enableHyg() {
        return this['enable_hyg'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): CreateGraphReqGraph {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm() {
        return this['crypt_algorithm'];
    }
    public withEnableHttps(enableHttps: boolean): CreateGraphReqGraph {
        this['enable_https'] = enableHttps;
        return this;
    }
    public set enableHttps(enableHttps: boolean | undefined) {
        this['enable_https'] = enableHttps;
    }
    public get enableHttps() {
        return this['enable_https'];
    }
    public withProductType(productType: string): CreateGraphReqGraph {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
        return this['product_type'];
    }
    public withVertexIdType(vertexIdType: CreateGraphReqGraphVertexIdType): CreateGraphReqGraph {
        this['vertex_id_type'] = vertexIdType;
        return this;
    }
    public set vertexIdType(vertexIdType: CreateGraphReqGraphVertexIdType | undefined) {
        this['vertex_id_type'] = vertexIdType;
    }
    public get vertexIdType() {
        return this['vertex_id_type'];
    }
}