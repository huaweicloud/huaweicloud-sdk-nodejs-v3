import { CreateGraphReqGraphEncryption } from './CreateGraphReqGraphEncryption';
import { CreateGraphReqGraphLtsOperationTrace } from './CreateGraphReqGraphLtsOperationTrace';
import { CreateGraphReqGraphPublicIp } from './CreateGraphReqGraphPublicIp';
import { CreateGraphReqGraphSysTags } from './CreateGraphReqGraphSysTags';
import { CreateGraphReqGraphVertexIdType } from './CreateGraphReqGraphVertexIdType';
import { ListGraphsRespTags } from './ListGraphsRespTags';


export class CreateGraphReqGraph {
    public name?: string;
    private 'graph_size_type_index'?: string;
    public arch?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'public_ip'?: CreateGraphReqGraphPublicIp;
    private 'enable_multi_az'?: boolean;
    public encryption?: CreateGraphReqGraphEncryption;
    private 'lts_operation_trace'?: CreateGraphReqGraphLtsOperationTrace;
    private 'sys_tags'?: Array<CreateGraphReqGraphSysTags>;
    public tags?: Array<ListGraphsRespTags>;
    private 'enable_rbac'?: boolean;
    private 'enable_full_text_index'?: boolean;
    private 'enable_hyg'?: boolean;
    private 'crypt_algorithm'?: string;
    private 'enable_https'?: boolean;
    private 'product_type'?: string;
    private 'vertex_id_type'?: CreateGraphReqGraphVertexIdType;
    private 'enable_multi_label'?: boolean;
    private 'capacity_ratio'?: number;
    private 'is_dynamic_graph'?: boolean;
    public constructor(name?: string, graphSizeTypeIndex?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, cryptAlgorithm?: string, enableHttps?: boolean) { 
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
    public set graphSizeTypeIndex(graphSizeTypeIndex: string  | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex(): string | undefined {
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
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateGraphReqGraph {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateGraphReqGraph {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPublicIp(publicIp: CreateGraphReqGraphPublicIp): CreateGraphReqGraph {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: CreateGraphReqGraphPublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): CreateGraphReqGraphPublicIp | undefined {
        return this['public_ip'];
    }
    public withEnableMultiAz(enableMultiAz: boolean): CreateGraphReqGraph {
        this['enable_multi_az'] = enableMultiAz;
        return this;
    }
    public set enableMultiAz(enableMultiAz: boolean  | undefined) {
        this['enable_multi_az'] = enableMultiAz;
    }
    public get enableMultiAz(): boolean | undefined {
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
    public set ltsOperationTrace(ltsOperationTrace: CreateGraphReqGraphLtsOperationTrace  | undefined) {
        this['lts_operation_trace'] = ltsOperationTrace;
    }
    public get ltsOperationTrace(): CreateGraphReqGraphLtsOperationTrace | undefined {
        return this['lts_operation_trace'];
    }
    public withSysTags(sysTags: Array<CreateGraphReqGraphSysTags>): CreateGraphReqGraph {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<CreateGraphReqGraphSysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<CreateGraphReqGraphSysTags> | undefined {
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
    public set enableRbac(enableRbac: boolean  | undefined) {
        this['enable_rbac'] = enableRbac;
    }
    public get enableRbac(): boolean | undefined {
        return this['enable_rbac'];
    }
    public withEnableFullTextIndex(enableFullTextIndex: boolean): CreateGraphReqGraph {
        this['enable_full_text_index'] = enableFullTextIndex;
        return this;
    }
    public set enableFullTextIndex(enableFullTextIndex: boolean  | undefined) {
        this['enable_full_text_index'] = enableFullTextIndex;
    }
    public get enableFullTextIndex(): boolean | undefined {
        return this['enable_full_text_index'];
    }
    public withEnableHyg(enableHyg: boolean): CreateGraphReqGraph {
        this['enable_hyg'] = enableHyg;
        return this;
    }
    public set enableHyg(enableHyg: boolean  | undefined) {
        this['enable_hyg'] = enableHyg;
    }
    public get enableHyg(): boolean | undefined {
        return this['enable_hyg'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): CreateGraphReqGraph {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string  | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm(): string | undefined {
        return this['crypt_algorithm'];
    }
    public withEnableHttps(enableHttps: boolean): CreateGraphReqGraph {
        this['enable_https'] = enableHttps;
        return this;
    }
    public set enableHttps(enableHttps: boolean  | undefined) {
        this['enable_https'] = enableHttps;
    }
    public get enableHttps(): boolean | undefined {
        return this['enable_https'];
    }
    public withProductType(productType: string): CreateGraphReqGraph {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withVertexIdType(vertexIdType: CreateGraphReqGraphVertexIdType): CreateGraphReqGraph {
        this['vertex_id_type'] = vertexIdType;
        return this;
    }
    public set vertexIdType(vertexIdType: CreateGraphReqGraphVertexIdType  | undefined) {
        this['vertex_id_type'] = vertexIdType;
    }
    public get vertexIdType(): CreateGraphReqGraphVertexIdType | undefined {
        return this['vertex_id_type'];
    }
    public withEnableMultiLabel(enableMultiLabel: boolean): CreateGraphReqGraph {
        this['enable_multi_label'] = enableMultiLabel;
        return this;
    }
    public set enableMultiLabel(enableMultiLabel: boolean  | undefined) {
        this['enable_multi_label'] = enableMultiLabel;
    }
    public get enableMultiLabel(): boolean | undefined {
        return this['enable_multi_label'];
    }
    public withCapacityRatio(capacityRatio: number): CreateGraphReqGraph {
        this['capacity_ratio'] = capacityRatio;
        return this;
    }
    public set capacityRatio(capacityRatio: number  | undefined) {
        this['capacity_ratio'] = capacityRatio;
    }
    public get capacityRatio(): number | undefined {
        return this['capacity_ratio'];
    }
    public withIsDynamicGraph(isDynamicGraph: boolean): CreateGraphReqGraph {
        this['is_dynamic_graph'] = isDynamicGraph;
        return this;
    }
    public set isDynamicGraph(isDynamicGraph: boolean  | undefined) {
        this['is_dynamic_graph'] = isDynamicGraph;
    }
    public get isDynamicGraph(): boolean | undefined {
        return this['is_dynamic_graph'];
    }
}