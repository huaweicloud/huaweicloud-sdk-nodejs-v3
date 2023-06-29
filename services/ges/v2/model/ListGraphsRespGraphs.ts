import { ListGraphsRespSchemaPath } from './ListGraphsRespSchemaPath';
import { ListGraphsRespTags } from './ListGraphsRespTags';
import { ListGraphsRespVertexIdType } from './ListGraphsRespVertexIdType';


export class ListGraphsRespGraphs {
    public id?: string;
    public name?: string;
    private 'created_by'?: string | undefined;
    private 'is_multi_az'?: string | undefined;
    private 'region_code'?: string | undefined;
    private 'az_code'?: string | undefined;
    private 'schema_path'?: Array<ListGraphsRespSchemaPath> | undefined;
    private 'edgeset_path'?: Array<ListGraphsRespSchemaPath> | undefined;
    private 'vertexset_path'?: Array<ListGraphsRespSchemaPath> | undefined;
    private 'edgeset_format'?: string | undefined;
    private 'edgeset_default_label'?: string | undefined;
    private 'vertexset_format'?: string | undefined;
    private 'vertexset_default_label'?: string | undefined;
    private 'data_store_version'?: string | undefined;
    private 'sys_tags'?: Array<string> | undefined;
    public status?: string;
    private 'action_progress'?: string | undefined;
    private 'graph_size_type_index'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    public replication?: number;
    public created?: string;
    public updated?: string;
    private 'private_ip'?: string | undefined;
    private 'public_ip'?: string | undefined;
    public arch?: string;
    public encrypted?: boolean;
    private 'master_key_id'?: string | undefined;
    private 'master_key_name'?: string | undefined;
    private 'enable_rbac'?: boolean | undefined;
    private 'enable_full_text_index'?: boolean | undefined;
    private 'enable_hyg'?: boolean | undefined;
    private 'traffic_ip_list'?: Array<string> | undefined;
    private 'crypt_algorithm'?: string | undefined;
    private 'enable_https'?: boolean | undefined;
    public tags?: Array<ListGraphsRespTags>;
    private 'product_type'?: string | undefined;
    private 'vertex_id_type'?: ListGraphsRespVertexIdType | undefined;
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
    public set createdBy(createdBy: string | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
    public withIsMultiAz(isMultiAz: string): ListGraphsRespGraphs {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: string | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
        return this['is_multi_az'];
    }
    public withRegionCode(regionCode: string): ListGraphsRespGraphs {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode() {
        return this['region_code'];
    }
    public withAzCode(azCode: string): ListGraphsRespGraphs {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode() {
        return this['az_code'];
    }
    public withSchemaPath(schemaPath: Array<ListGraphsRespSchemaPath>): ListGraphsRespGraphs {
        this['schema_path'] = schemaPath;
        return this;
    }
    public set schemaPath(schemaPath: Array<ListGraphsRespSchemaPath> | undefined) {
        this['schema_path'] = schemaPath;
    }
    public get schemaPath() {
        return this['schema_path'];
    }
    public withEdgesetPath(edgesetPath: Array<ListGraphsRespSchemaPath>): ListGraphsRespGraphs {
        this['edgeset_path'] = edgesetPath;
        return this;
    }
    public set edgesetPath(edgesetPath: Array<ListGraphsRespSchemaPath> | undefined) {
        this['edgeset_path'] = edgesetPath;
    }
    public get edgesetPath() {
        return this['edgeset_path'];
    }
    public withVertexsetPath(vertexsetPath: Array<ListGraphsRespSchemaPath>): ListGraphsRespGraphs {
        this['vertexset_path'] = vertexsetPath;
        return this;
    }
    public set vertexsetPath(vertexsetPath: Array<ListGraphsRespSchemaPath> | undefined) {
        this['vertexset_path'] = vertexsetPath;
    }
    public get vertexsetPath() {
        return this['vertexset_path'];
    }
    public withEdgesetFormat(edgesetFormat: string): ListGraphsRespGraphs {
        this['edgeset_format'] = edgesetFormat;
        return this;
    }
    public set edgesetFormat(edgesetFormat: string | undefined) {
        this['edgeset_format'] = edgesetFormat;
    }
    public get edgesetFormat() {
        return this['edgeset_format'];
    }
    public withEdgesetDefaultLabel(edgesetDefaultLabel: string): ListGraphsRespGraphs {
        this['edgeset_default_label'] = edgesetDefaultLabel;
        return this;
    }
    public set edgesetDefaultLabel(edgesetDefaultLabel: string | undefined) {
        this['edgeset_default_label'] = edgesetDefaultLabel;
    }
    public get edgesetDefaultLabel() {
        return this['edgeset_default_label'];
    }
    public withVertexsetFormat(vertexsetFormat: string): ListGraphsRespGraphs {
        this['vertexset_format'] = vertexsetFormat;
        return this;
    }
    public set vertexsetFormat(vertexsetFormat: string | undefined) {
        this['vertexset_format'] = vertexsetFormat;
    }
    public get vertexsetFormat() {
        return this['vertexset_format'];
    }
    public withVertexsetDefaultLabel(vertexsetDefaultLabel: string): ListGraphsRespGraphs {
        this['vertexset_default_label'] = vertexsetDefaultLabel;
        return this;
    }
    public set vertexsetDefaultLabel(vertexsetDefaultLabel: string | undefined) {
        this['vertexset_default_label'] = vertexsetDefaultLabel;
    }
    public get vertexsetDefaultLabel() {
        return this['vertexset_default_label'];
    }
    public withDataStoreVersion(dataStoreVersion: string): ListGraphsRespGraphs {
        this['data_store_version'] = dataStoreVersion;
        return this;
    }
    public set dataStoreVersion(dataStoreVersion: string | undefined) {
        this['data_store_version'] = dataStoreVersion;
    }
    public get dataStoreVersion() {
        return this['data_store_version'];
    }
    public withSysTags(sysTags: Array<string>): ListGraphsRespGraphs {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<string> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
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
    public set actionProgress(actionProgress: string | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress() {
        return this['action_progress'];
    }
    public withGraphSizeTypeIndex(graphSizeTypeIndex: string): ListGraphsRespGraphs {
        this['graph_size_type_index'] = graphSizeTypeIndex;
        return this;
    }
    public set graphSizeTypeIndex(graphSizeTypeIndex: string | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex() {
        return this['graph_size_type_index'];
    }
    public withVpcId(vpcId: string): ListGraphsRespGraphs {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListGraphsRespGraphs {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ListGraphsRespGraphs {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
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
    public set privateIp(privateIp: string | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp() {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListGraphsRespGraphs {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
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
    public set masterKeyId(masterKeyId: string | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId() {
        return this['master_key_id'];
    }
    public withMasterKeyName(masterKeyName: string): ListGraphsRespGraphs {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName() {
        return this['master_key_name'];
    }
    public withEnableRbac(enableRbac: boolean): ListGraphsRespGraphs {
        this['enable_rbac'] = enableRbac;
        return this;
    }
    public set enableRbac(enableRbac: boolean | undefined) {
        this['enable_rbac'] = enableRbac;
    }
    public get enableRbac() {
        return this['enable_rbac'];
    }
    public withEnableFullTextIndex(enableFullTextIndex: boolean): ListGraphsRespGraphs {
        this['enable_full_text_index'] = enableFullTextIndex;
        return this;
    }
    public set enableFullTextIndex(enableFullTextIndex: boolean | undefined) {
        this['enable_full_text_index'] = enableFullTextIndex;
    }
    public get enableFullTextIndex() {
        return this['enable_full_text_index'];
    }
    public withEnableHyg(enableHyg: boolean): ListGraphsRespGraphs {
        this['enable_hyg'] = enableHyg;
        return this;
    }
    public set enableHyg(enableHyg: boolean | undefined) {
        this['enable_hyg'] = enableHyg;
    }
    public get enableHyg() {
        return this['enable_hyg'];
    }
    public withTrafficIpList(trafficIpList: Array<string>): ListGraphsRespGraphs {
        this['traffic_ip_list'] = trafficIpList;
        return this;
    }
    public set trafficIpList(trafficIpList: Array<string> | undefined) {
        this['traffic_ip_list'] = trafficIpList;
    }
    public get trafficIpList() {
        return this['traffic_ip_list'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): ListGraphsRespGraphs {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm() {
        return this['crypt_algorithm'];
    }
    public withEnableHttps(enableHttps: boolean): ListGraphsRespGraphs {
        this['enable_https'] = enableHttps;
        return this;
    }
    public set enableHttps(enableHttps: boolean | undefined) {
        this['enable_https'] = enableHttps;
    }
    public get enableHttps() {
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
    public set productType(productType: string | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
        return this['product_type'];
    }
    public withVertexIdType(vertexIdType: ListGraphsRespVertexIdType): ListGraphsRespGraphs {
        this['vertex_id_type'] = vertexIdType;
        return this;
    }
    public set vertexIdType(vertexIdType: ListGraphsRespVertexIdType | undefined) {
        this['vertex_id_type'] = vertexIdType;
    }
    public get vertexIdType() {
        return this['vertex_id_type'];
    }
}