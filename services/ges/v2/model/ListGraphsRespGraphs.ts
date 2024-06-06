import { ListGraphsRespSchemaPath } from './ListGraphsRespSchemaPath';
import { ListGraphsRespTags } from './ListGraphsRespTags';
import { ListGraphsRespVertexIdType } from './ListGraphsRespVertexIdType';


export class ListGraphsRespGraphs {
    public id?: string;
    public name?: string;
    private 'created_by'?: string;
    private 'is_multi_az'?: string;
    private 'region_code'?: string;
    private 'az_code'?: string;
    private 'schema_path'?: Array<ListGraphsRespSchemaPath>;
    private 'edgeset_path'?: Array<ListGraphsRespSchemaPath>;
    private 'vertexset_path'?: Array<ListGraphsRespSchemaPath>;
    private 'edgeset_format'?: string;
    private 'edgeset_default_label'?: string;
    private 'vertexset_format'?: string;
    private 'vertexset_default_label'?: string;
    private 'data_store_version'?: string;
    private 'sys_tags'?: Array<string>;
    public status?: string;
    private 'action_progress'?: string;
    private 'graph_size_type_index'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public replication?: number;
    public created?: string;
    public updated?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    public arch?: string;
    public encrypted?: boolean;
    private 'master_key_id'?: string;
    private 'master_key_name'?: string;
    private 'enable_rbac'?: boolean;
    private 'enable_full_text_index'?: boolean;
    private 'enable_hyg'?: boolean;
    private 'traffic_ip_list'?: Array<string>;
    private 'crypt_algorithm'?: string;
    private 'enable_https'?: boolean;
    public tags?: Array<ListGraphsRespTags>;
    private 'product_type'?: string;
    private 'vertex_id_type'?: ListGraphsRespVertexIdType;
    private 'origin_graph_size_type_index'?: string;
    private 'expand_time'?: string;
    private 'resize_time'?: string;
    private 'enable_multi_label'?: boolean;
    private 'capacity_ratio'?: number;
    private 'sort_key_type'?: string;
    public constructor() { 
    }
    public withId(id: string): ListGraphsRespGraphs {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListGraphsRespGraphs {
        this['name'] = name;
        return this;
    }
    public withCreatedBy(createdBy: string): ListGraphsRespGraphs {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withIsMultiAz(isMultiAz: string): ListGraphsRespGraphs {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: string  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): string | undefined {
        return this['is_multi_az'];
    }
    public withRegionCode(regionCode: string): ListGraphsRespGraphs {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string  | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode(): string | undefined {
        return this['region_code'];
    }
    public withAzCode(azCode: string): ListGraphsRespGraphs {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withSchemaPath(schemaPath: Array<ListGraphsRespSchemaPath>): ListGraphsRespGraphs {
        this['schema_path'] = schemaPath;
        return this;
    }
    public set schemaPath(schemaPath: Array<ListGraphsRespSchemaPath>  | undefined) {
        this['schema_path'] = schemaPath;
    }
    public get schemaPath(): Array<ListGraphsRespSchemaPath> | undefined {
        return this['schema_path'];
    }
    public withEdgesetPath(edgesetPath: Array<ListGraphsRespSchemaPath>): ListGraphsRespGraphs {
        this['edgeset_path'] = edgesetPath;
        return this;
    }
    public set edgesetPath(edgesetPath: Array<ListGraphsRespSchemaPath>  | undefined) {
        this['edgeset_path'] = edgesetPath;
    }
    public get edgesetPath(): Array<ListGraphsRespSchemaPath> | undefined {
        return this['edgeset_path'];
    }
    public withVertexsetPath(vertexsetPath: Array<ListGraphsRespSchemaPath>): ListGraphsRespGraphs {
        this['vertexset_path'] = vertexsetPath;
        return this;
    }
    public set vertexsetPath(vertexsetPath: Array<ListGraphsRespSchemaPath>  | undefined) {
        this['vertexset_path'] = vertexsetPath;
    }
    public get vertexsetPath(): Array<ListGraphsRespSchemaPath> | undefined {
        return this['vertexset_path'];
    }
    public withEdgesetFormat(edgesetFormat: string): ListGraphsRespGraphs {
        this['edgeset_format'] = edgesetFormat;
        return this;
    }
    public set edgesetFormat(edgesetFormat: string  | undefined) {
        this['edgeset_format'] = edgesetFormat;
    }
    public get edgesetFormat(): string | undefined {
        return this['edgeset_format'];
    }
    public withEdgesetDefaultLabel(edgesetDefaultLabel: string): ListGraphsRespGraphs {
        this['edgeset_default_label'] = edgesetDefaultLabel;
        return this;
    }
    public set edgesetDefaultLabel(edgesetDefaultLabel: string  | undefined) {
        this['edgeset_default_label'] = edgesetDefaultLabel;
    }
    public get edgesetDefaultLabel(): string | undefined {
        return this['edgeset_default_label'];
    }
    public withVertexsetFormat(vertexsetFormat: string): ListGraphsRespGraphs {
        this['vertexset_format'] = vertexsetFormat;
        return this;
    }
    public set vertexsetFormat(vertexsetFormat: string  | undefined) {
        this['vertexset_format'] = vertexsetFormat;
    }
    public get vertexsetFormat(): string | undefined {
        return this['vertexset_format'];
    }
    public withVertexsetDefaultLabel(vertexsetDefaultLabel: string): ListGraphsRespGraphs {
        this['vertexset_default_label'] = vertexsetDefaultLabel;
        return this;
    }
    public set vertexsetDefaultLabel(vertexsetDefaultLabel: string  | undefined) {
        this['vertexset_default_label'] = vertexsetDefaultLabel;
    }
    public get vertexsetDefaultLabel(): string | undefined {
        return this['vertexset_default_label'];
    }
    public withDataStoreVersion(dataStoreVersion: string): ListGraphsRespGraphs {
        this['data_store_version'] = dataStoreVersion;
        return this;
    }
    public set dataStoreVersion(dataStoreVersion: string  | undefined) {
        this['data_store_version'] = dataStoreVersion;
    }
    public get dataStoreVersion(): string | undefined {
        return this['data_store_version'];
    }
    public withSysTags(sysTags: Array<string>): ListGraphsRespGraphs {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<string>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<string> | undefined {
        return this['sys_tags'];
    }
    public withStatus(status: string): ListGraphsRespGraphs {
        this['status'] = status;
        return this;
    }
    public withActionProgress(actionProgress: string): ListGraphsRespGraphs {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: string  | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress(): string | undefined {
        return this['action_progress'];
    }
    public withGraphSizeTypeIndex(graphSizeTypeIndex: string): ListGraphsRespGraphs {
        this['graph_size_type_index'] = graphSizeTypeIndex;
        return this;
    }
    public set graphSizeTypeIndex(graphSizeTypeIndex: string  | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex(): string | undefined {
        return this['graph_size_type_index'];
    }
    public withVpcId(vpcId: string): ListGraphsRespGraphs {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListGraphsRespGraphs {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ListGraphsRespGraphs {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withReplication(replication: number): ListGraphsRespGraphs {
        this['replication'] = replication;
        return this;
    }
    public withCreated(created: string): ListGraphsRespGraphs {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ListGraphsRespGraphs {
        this['updated'] = updated;
        return this;
    }
    public withPrivateIp(privateIp: string): ListGraphsRespGraphs {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListGraphsRespGraphs {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withArch(arch: string): ListGraphsRespGraphs {
        this['arch'] = arch;
        return this;
    }
    public withEncrypted(encrypted: boolean): ListGraphsRespGraphs {
        this['encrypted'] = encrypted;
        return this;
    }
    public withMasterKeyId(masterKeyId: string): ListGraphsRespGraphs {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string  | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId(): string | undefined {
        return this['master_key_id'];
    }
    public withMasterKeyName(masterKeyName: string): ListGraphsRespGraphs {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string  | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName(): string | undefined {
        return this['master_key_name'];
    }
    public withEnableRbac(enableRbac: boolean): ListGraphsRespGraphs {
        this['enable_rbac'] = enableRbac;
        return this;
    }
    public set enableRbac(enableRbac: boolean  | undefined) {
        this['enable_rbac'] = enableRbac;
    }
    public get enableRbac(): boolean | undefined {
        return this['enable_rbac'];
    }
    public withEnableFullTextIndex(enableFullTextIndex: boolean): ListGraphsRespGraphs {
        this['enable_full_text_index'] = enableFullTextIndex;
        return this;
    }
    public set enableFullTextIndex(enableFullTextIndex: boolean  | undefined) {
        this['enable_full_text_index'] = enableFullTextIndex;
    }
    public get enableFullTextIndex(): boolean | undefined {
        return this['enable_full_text_index'];
    }
    public withEnableHyg(enableHyg: boolean): ListGraphsRespGraphs {
        this['enable_hyg'] = enableHyg;
        return this;
    }
    public set enableHyg(enableHyg: boolean  | undefined) {
        this['enable_hyg'] = enableHyg;
    }
    public get enableHyg(): boolean | undefined {
        return this['enable_hyg'];
    }
    public withTrafficIpList(trafficIpList: Array<string>): ListGraphsRespGraphs {
        this['traffic_ip_list'] = trafficIpList;
        return this;
    }
    public set trafficIpList(trafficIpList: Array<string>  | undefined) {
        this['traffic_ip_list'] = trafficIpList;
    }
    public get trafficIpList(): Array<string> | undefined {
        return this['traffic_ip_list'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): ListGraphsRespGraphs {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string  | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm(): string | undefined {
        return this['crypt_algorithm'];
    }
    public withEnableHttps(enableHttps: boolean): ListGraphsRespGraphs {
        this['enable_https'] = enableHttps;
        return this;
    }
    public set enableHttps(enableHttps: boolean  | undefined) {
        this['enable_https'] = enableHttps;
    }
    public get enableHttps(): boolean | undefined {
        return this['enable_https'];
    }
    public withTags(tags: Array<ListGraphsRespTags>): ListGraphsRespGraphs {
        this['tags'] = tags;
        return this;
    }
    public withProductType(productType: string): ListGraphsRespGraphs {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withVertexIdType(vertexIdType: ListGraphsRespVertexIdType): ListGraphsRespGraphs {
        this['vertex_id_type'] = vertexIdType;
        return this;
    }
    public set vertexIdType(vertexIdType: ListGraphsRespVertexIdType  | undefined) {
        this['vertex_id_type'] = vertexIdType;
    }
    public get vertexIdType(): ListGraphsRespVertexIdType | undefined {
        return this['vertex_id_type'];
    }
    public withOriginGraphSizeTypeIndex(originGraphSizeTypeIndex: string): ListGraphsRespGraphs {
        this['origin_graph_size_type_index'] = originGraphSizeTypeIndex;
        return this;
    }
    public set originGraphSizeTypeIndex(originGraphSizeTypeIndex: string  | undefined) {
        this['origin_graph_size_type_index'] = originGraphSizeTypeIndex;
    }
    public get originGraphSizeTypeIndex(): string | undefined {
        return this['origin_graph_size_type_index'];
    }
    public withExpandTime(expandTime: string): ListGraphsRespGraphs {
        this['expand_time'] = expandTime;
        return this;
    }
    public set expandTime(expandTime: string  | undefined) {
        this['expand_time'] = expandTime;
    }
    public get expandTime(): string | undefined {
        return this['expand_time'];
    }
    public withResizeTime(resizeTime: string): ListGraphsRespGraphs {
        this['resize_time'] = resizeTime;
        return this;
    }
    public set resizeTime(resizeTime: string  | undefined) {
        this['resize_time'] = resizeTime;
    }
    public get resizeTime(): string | undefined {
        return this['resize_time'];
    }
    public withEnableMultiLabel(enableMultiLabel: boolean): ListGraphsRespGraphs {
        this['enable_multi_label'] = enableMultiLabel;
        return this;
    }
    public set enableMultiLabel(enableMultiLabel: boolean  | undefined) {
        this['enable_multi_label'] = enableMultiLabel;
    }
    public get enableMultiLabel(): boolean | undefined {
        return this['enable_multi_label'];
    }
    public withCapacityRatio(capacityRatio: number): ListGraphsRespGraphs {
        this['capacity_ratio'] = capacityRatio;
        return this;
    }
    public set capacityRatio(capacityRatio: number  | undefined) {
        this['capacity_ratio'] = capacityRatio;
    }
    public get capacityRatio(): number | undefined {
        return this['capacity_ratio'];
    }
    public withSortKeyType(sortKeyType: string): ListGraphsRespGraphs {
        this['sort_key_type'] = sortKeyType;
        return this;
    }
    public set sortKeyType(sortKeyType: string  | undefined) {
        this['sort_key_type'] = sortKeyType;
    }
    public get sortKeyType(): string | undefined {
        return this['sort_key_type'];
    }
}