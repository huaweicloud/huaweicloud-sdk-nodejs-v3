import { TagEntity } from './TagEntity';


export class ShowInstanceResp {
    public name?: string;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    public description?: string;
    public specification?: string;
    private 'storage_space'?: number | undefined;
    private 'partition_num'?: string | undefined;
    private 'used_storage_space'?: number | undefined;
    private 'connect_address'?: string | undefined;
    public port?: number;
    public status?: string;
    private 'instance_id'?: string | undefined;
    private 'resource_spec_code'?: string | undefined;
    private 'charging_mode'?: number | undefined;
    private 'vpc_id'?: string | undefined;
    private 'vpc_name'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'subnet_name'?: string | undefined;
    private 'subnet_cidr'?: string | undefined;
    private 'user_id'?: string | undefined;
    private 'user_name'?: string | undefined;
    private 'access_user'?: string | undefined;
    private 'order_id'?: string | undefined;
    private 'maintain_begin'?: string | undefined;
    private 'maintain_end'?: string | undefined;
    private 'enable_publicip'?: boolean | undefined;
    private 'management_connect_address'?: string | undefined;
    private 'ssl_enable'?: boolean | undefined;
    private 'kafka_security_protocol'?: string | undefined;
    private 'sasl_enabled_mechanisms'?: Array<ShowInstanceRespSaslEnabledMechanismsEnum> | undefined;
    private 'ssl_two_way_enable'?: boolean | undefined;
    private 'cert_replaced'?: boolean | undefined;
    private 'public_management_connect_address'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'is_logical_volume'?: boolean | undefined;
    private 'extend_times'?: number | undefined;
    private 'enable_auto_topic'?: boolean | undefined;
    public type?: ShowInstanceRespTypeEnum;
    private 'product_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'security_group_name'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'available_zones'?: Array<string> | undefined;
    private 'total_storage_space'?: number | undefined;
    private 'public_connect_address'?: string | undefined;
    private 'storage_resource_id'?: string | undefined;
    private 'storage_spec_code'?: string | undefined;
    private 'service_type'?: string | undefined;
    private 'storage_type'?: string | undefined;
    private 'retention_policy'?: ShowInstanceRespRetentionPolicyEnum | undefined;
    private 'kafka_public_status'?: string | undefined;
    private 'public_bandwidth'?: number | undefined;
    private 'kafka_manager_enable'?: boolean | undefined;
    private 'kafka_manager_user'?: string | undefined;
    private 'enable_log_collection'?: boolean | undefined;
    private 'cross_vpc_info'?: string | undefined;
    private 'ipv6_enable'?: boolean | undefined;
    private 'ipv6_connect_addresses'?: Array<string> | undefined;
    private 'connector_enable'?: boolean | undefined;
    private 'connector_id'?: string | undefined;
    private 'rest_enable'?: boolean | undefined;
    private 'rest_connect_address'?: string | undefined;
    private 'public_boundwidth'?: number | undefined;
    private 'message_query_inst_enable'?: boolean | undefined;
    private 'vpc_client_plain'?: boolean | undefined;
    private 'support_features'?: string | undefined;
    private 'trace_enable'?: boolean | undefined;
    private 'agent_enable'?: boolean | undefined;
    private 'pod_connect_address'?: string | undefined;
    private 'disk_encrypted'?: boolean | undefined;
    private 'disk_encrypted_key'?: string | undefined;
    private 'kafka_private_connect_address'?: string | undefined;
    private 'ces_version'?: string | undefined;
    private 'public_access_enabled'?: string | undefined;
    private 'node_num'?: number | undefined;
    private 'enable_acl'?: boolean | undefined;
    private 'new_spec_billing_enable'?: boolean | undefined;
    private 'broker_num'?: number | undefined;
    public tags?: Array<TagEntity>;
    private 'dr_enable'?: boolean | undefined;
    public constructor() { 
    }
    public withName(name: string): ShowInstanceResp {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: string): ShowInstanceResp {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ShowInstanceResp {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withDescription(description: string): ShowInstanceResp {
        this['description'] = description;
        return this;
    }
    public withSpecification(specification: string): ShowInstanceResp {
        this['specification'] = specification;
        return this;
    }
    public withStorageSpace(storageSpace: number): ShowInstanceResp {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace() {
        return this['storage_space'];
    }
    public withPartitionNum(partitionNum: string): ShowInstanceResp {
        this['partition_num'] = partitionNum;
        return this;
    }
    public set partitionNum(partitionNum: string | undefined) {
        this['partition_num'] = partitionNum;
    }
    public get partitionNum() {
        return this['partition_num'];
    }
    public withUsedStorageSpace(usedStorageSpace: number): ShowInstanceResp {
        this['used_storage_space'] = usedStorageSpace;
        return this;
    }
    public set usedStorageSpace(usedStorageSpace: number | undefined) {
        this['used_storage_space'] = usedStorageSpace;
    }
    public get usedStorageSpace() {
        return this['used_storage_space'];
    }
    public withConnectAddress(connectAddress: string): ShowInstanceResp {
        this['connect_address'] = connectAddress;
        return this;
    }
    public set connectAddress(connectAddress: string | undefined) {
        this['connect_address'] = connectAddress;
    }
    public get connectAddress() {
        return this['connect_address'];
    }
    public withPort(port: number): ShowInstanceResp {
        this['port'] = port;
        return this;
    }
    public withStatus(status: string): ShowInstanceResp {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): ShowInstanceResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowInstanceResp {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode() {
        return this['resource_spec_code'];
    }
    public withChargingMode(chargingMode: number): ShowInstanceResp {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withVpcId(vpcId: string): ShowInstanceResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): ShowInstanceResp {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName() {
        return this['vpc_name'];
    }
    public withCreatedAt(createdAt: string): ShowInstanceResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withSubnetName(subnetName: string): ShowInstanceResp {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName() {
        return this['subnet_name'];
    }
    public withSubnetCidr(subnetCidr: string): ShowInstanceResp {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr() {
        return this['subnet_cidr'];
    }
    public withUserId(userId: string): ShowInstanceResp {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowInstanceResp {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withAccessUser(accessUser: string): ShowInstanceResp {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withOrderId(orderId: string): ShowInstanceResp {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withMaintainBegin(maintainBegin: string): ShowInstanceResp {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): ShowInstanceResp {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): ShowInstanceResp {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withManagementConnectAddress(managementConnectAddress: string): ShowInstanceResp {
        this['management_connect_address'] = managementConnectAddress;
        return this;
    }
    public set managementConnectAddress(managementConnectAddress: string | undefined) {
        this['management_connect_address'] = managementConnectAddress;
    }
    public get managementConnectAddress() {
        return this['management_connect_address'];
    }
    public withSslEnable(sslEnable: boolean): ShowInstanceResp {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable() {
        return this['ssl_enable'];
    }
    public withKafkaSecurityProtocol(kafkaSecurityProtocol: string): ShowInstanceResp {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
        return this;
    }
    public set kafkaSecurityProtocol(kafkaSecurityProtocol: string | undefined) {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
    }
    public get kafkaSecurityProtocol() {
        return this['kafka_security_protocol'];
    }
    public withSaslEnabledMechanisms(saslEnabledMechanisms: Array<ShowInstanceRespSaslEnabledMechanismsEnum>): ShowInstanceResp {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
        return this;
    }
    public set saslEnabledMechanisms(saslEnabledMechanisms: Array<ShowInstanceRespSaslEnabledMechanismsEnum> | undefined) {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
    }
    public get saslEnabledMechanisms() {
        return this['sasl_enabled_mechanisms'];
    }
    public withSslTwoWayEnable(sslTwoWayEnable: boolean): ShowInstanceResp {
        this['ssl_two_way_enable'] = sslTwoWayEnable;
        return this;
    }
    public set sslTwoWayEnable(sslTwoWayEnable: boolean | undefined) {
        this['ssl_two_way_enable'] = sslTwoWayEnable;
    }
    public get sslTwoWayEnable() {
        return this['ssl_two_way_enable'];
    }
    public withCertReplaced(certReplaced: boolean): ShowInstanceResp {
        this['cert_replaced'] = certReplaced;
        return this;
    }
    public set certReplaced(certReplaced: boolean | undefined) {
        this['cert_replaced'] = certReplaced;
    }
    public get certReplaced() {
        return this['cert_replaced'];
    }
    public withPublicManagementConnectAddress(publicManagementConnectAddress: string): ShowInstanceResp {
        this['public_management_connect_address'] = publicManagementConnectAddress;
        return this;
    }
    public set publicManagementConnectAddress(publicManagementConnectAddress: string | undefined) {
        this['public_management_connect_address'] = publicManagementConnectAddress;
    }
    public get publicManagementConnectAddress() {
        return this['public_management_connect_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInstanceResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withIsLogicalVolume(isLogicalVolume: boolean): ShowInstanceResp {
        this['is_logical_volume'] = isLogicalVolume;
        return this;
    }
    public set isLogicalVolume(isLogicalVolume: boolean | undefined) {
        this['is_logical_volume'] = isLogicalVolume;
    }
    public get isLogicalVolume() {
        return this['is_logical_volume'];
    }
    public withExtendTimes(extendTimes: number): ShowInstanceResp {
        this['extend_times'] = extendTimes;
        return this;
    }
    public set extendTimes(extendTimes: number | undefined) {
        this['extend_times'] = extendTimes;
    }
    public get extendTimes() {
        return this['extend_times'];
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): ShowInstanceResp {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic() {
        return this['enable_auto_topic'];
    }
    public withType(type: ShowInstanceRespTypeEnum): ShowInstanceResp {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ShowInstanceResp {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ShowInstanceResp {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withSecurityGroupName(securityGroupName: string): ShowInstanceResp {
        this['security_group_name'] = securityGroupName;
        return this;
    }
    public set securityGroupName(securityGroupName: string | undefined) {
        this['security_group_name'] = securityGroupName;
    }
    public get securityGroupName() {
        return this['security_group_name'];
    }
    public withSubnetId(subnetId: string): ShowInstanceResp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): ShowInstanceResp {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withTotalStorageSpace(totalStorageSpace: number): ShowInstanceResp {
        this['total_storage_space'] = totalStorageSpace;
        return this;
    }
    public set totalStorageSpace(totalStorageSpace: number | undefined) {
        this['total_storage_space'] = totalStorageSpace;
    }
    public get totalStorageSpace() {
        return this['total_storage_space'];
    }
    public withPublicConnectAddress(publicConnectAddress: string): ShowInstanceResp {
        this['public_connect_address'] = publicConnectAddress;
        return this;
    }
    public set publicConnectAddress(publicConnectAddress: string | undefined) {
        this['public_connect_address'] = publicConnectAddress;
    }
    public get publicConnectAddress() {
        return this['public_connect_address'];
    }
    public withStorageResourceId(storageResourceId: string): ShowInstanceResp {
        this['storage_resource_id'] = storageResourceId;
        return this;
    }
    public set storageResourceId(storageResourceId: string | undefined) {
        this['storage_resource_id'] = storageResourceId;
    }
    public get storageResourceId() {
        return this['storage_resource_id'];
    }
    public withStorageSpecCode(storageSpecCode: string): ShowInstanceResp {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: string | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode() {
        return this['storage_spec_code'];
    }
    public withServiceType(serviceType: string): ShowInstanceResp {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withStorageType(storageType: string): ShowInstanceResp {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType() {
        return this['storage_type'];
    }
    public withRetentionPolicy(retentionPolicy: ShowInstanceRespRetentionPolicyEnum): ShowInstanceResp {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: ShowInstanceRespRetentionPolicyEnum | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy() {
        return this['retention_policy'];
    }
    public withKafkaPublicStatus(kafkaPublicStatus: string): ShowInstanceResp {
        this['kafka_public_status'] = kafkaPublicStatus;
        return this;
    }
    public set kafkaPublicStatus(kafkaPublicStatus: string | undefined) {
        this['kafka_public_status'] = kafkaPublicStatus;
    }
    public get kafkaPublicStatus() {
        return this['kafka_public_status'];
    }
    public withPublicBandwidth(publicBandwidth: number): ShowInstanceResp {
        this['public_bandwidth'] = publicBandwidth;
        return this;
    }
    public set publicBandwidth(publicBandwidth: number | undefined) {
        this['public_bandwidth'] = publicBandwidth;
    }
    public get publicBandwidth() {
        return this['public_bandwidth'];
    }
    public withKafkaManagerEnable(kafkaManagerEnable: boolean): ShowInstanceResp {
        this['kafka_manager_enable'] = kafkaManagerEnable;
        return this;
    }
    public set kafkaManagerEnable(kafkaManagerEnable: boolean | undefined) {
        this['kafka_manager_enable'] = kafkaManagerEnable;
    }
    public get kafkaManagerEnable() {
        return this['kafka_manager_enable'];
    }
    public withKafkaManagerUser(kafkaManagerUser: string): ShowInstanceResp {
        this['kafka_manager_user'] = kafkaManagerUser;
        return this;
    }
    public set kafkaManagerUser(kafkaManagerUser: string | undefined) {
        this['kafka_manager_user'] = kafkaManagerUser;
    }
    public get kafkaManagerUser() {
        return this['kafka_manager_user'];
    }
    public withEnableLogCollection(enableLogCollection: boolean): ShowInstanceResp {
        this['enable_log_collection'] = enableLogCollection;
        return this;
    }
    public set enableLogCollection(enableLogCollection: boolean | undefined) {
        this['enable_log_collection'] = enableLogCollection;
    }
    public get enableLogCollection() {
        return this['enable_log_collection'];
    }
    public withCrossVpcInfo(crossVpcInfo: string): ShowInstanceResp {
        this['cross_vpc_info'] = crossVpcInfo;
        return this;
    }
    public set crossVpcInfo(crossVpcInfo: string | undefined) {
        this['cross_vpc_info'] = crossVpcInfo;
    }
    public get crossVpcInfo() {
        return this['cross_vpc_info'];
    }
    public withIpv6Enable(ipv6Enable: boolean): ShowInstanceResp {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withIpv6ConnectAddresses(ipv6ConnectAddresses: Array<string>): ShowInstanceResp {
        this['ipv6_connect_addresses'] = ipv6ConnectAddresses;
        return this;
    }
    public set ipv6ConnectAddresses(ipv6ConnectAddresses: Array<string> | undefined) {
        this['ipv6_connect_addresses'] = ipv6ConnectAddresses;
    }
    public get ipv6ConnectAddresses() {
        return this['ipv6_connect_addresses'];
    }
    public withConnectorEnable(connectorEnable: boolean): ShowInstanceResp {
        this['connector_enable'] = connectorEnable;
        return this;
    }
    public set connectorEnable(connectorEnable: boolean | undefined) {
        this['connector_enable'] = connectorEnable;
    }
    public get connectorEnable() {
        return this['connector_enable'];
    }
    public withConnectorId(connectorId: string): ShowInstanceResp {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId() {
        return this['connector_id'];
    }
    public withRestEnable(restEnable: boolean): ShowInstanceResp {
        this['rest_enable'] = restEnable;
        return this;
    }
    public set restEnable(restEnable: boolean | undefined) {
        this['rest_enable'] = restEnable;
    }
    public get restEnable() {
        return this['rest_enable'];
    }
    public withRestConnectAddress(restConnectAddress: string): ShowInstanceResp {
        this['rest_connect_address'] = restConnectAddress;
        return this;
    }
    public set restConnectAddress(restConnectAddress: string | undefined) {
        this['rest_connect_address'] = restConnectAddress;
    }
    public get restConnectAddress() {
        return this['rest_connect_address'];
    }
    public withPublicBoundwidth(publicBoundwidth: number): ShowInstanceResp {
        this['public_boundwidth'] = publicBoundwidth;
        return this;
    }
    public set publicBoundwidth(publicBoundwidth: number | undefined) {
        this['public_boundwidth'] = publicBoundwidth;
    }
    public get publicBoundwidth() {
        return this['public_boundwidth'];
    }
    public withMessageQueryInstEnable(messageQueryInstEnable: boolean): ShowInstanceResp {
        this['message_query_inst_enable'] = messageQueryInstEnable;
        return this;
    }
    public set messageQueryInstEnable(messageQueryInstEnable: boolean | undefined) {
        this['message_query_inst_enable'] = messageQueryInstEnable;
    }
    public get messageQueryInstEnable() {
        return this['message_query_inst_enable'];
    }
    public withVpcClientPlain(vpcClientPlain: boolean): ShowInstanceResp {
        this['vpc_client_plain'] = vpcClientPlain;
        return this;
    }
    public set vpcClientPlain(vpcClientPlain: boolean | undefined) {
        this['vpc_client_plain'] = vpcClientPlain;
    }
    public get vpcClientPlain() {
        return this['vpc_client_plain'];
    }
    public withSupportFeatures(supportFeatures: string): ShowInstanceResp {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: string | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures() {
        return this['support_features'];
    }
    public withTraceEnable(traceEnable: boolean): ShowInstanceResp {
        this['trace_enable'] = traceEnable;
        return this;
    }
    public set traceEnable(traceEnable: boolean | undefined) {
        this['trace_enable'] = traceEnable;
    }
    public get traceEnable() {
        return this['trace_enable'];
    }
    public withAgentEnable(agentEnable: boolean): ShowInstanceResp {
        this['agent_enable'] = agentEnable;
        return this;
    }
    public set agentEnable(agentEnable: boolean | undefined) {
        this['agent_enable'] = agentEnable;
    }
    public get agentEnable() {
        return this['agent_enable'];
    }
    public withPodConnectAddress(podConnectAddress: string): ShowInstanceResp {
        this['pod_connect_address'] = podConnectAddress;
        return this;
    }
    public set podConnectAddress(podConnectAddress: string | undefined) {
        this['pod_connect_address'] = podConnectAddress;
    }
    public get podConnectAddress() {
        return this['pod_connect_address'];
    }
    public withDiskEncrypted(diskEncrypted: boolean): ShowInstanceResp {
        this['disk_encrypted'] = diskEncrypted;
        return this;
    }
    public set diskEncrypted(diskEncrypted: boolean | undefined) {
        this['disk_encrypted'] = diskEncrypted;
    }
    public get diskEncrypted() {
        return this['disk_encrypted'];
    }
    public withDiskEncryptedKey(diskEncryptedKey: string): ShowInstanceResp {
        this['disk_encrypted_key'] = diskEncryptedKey;
        return this;
    }
    public set diskEncryptedKey(diskEncryptedKey: string | undefined) {
        this['disk_encrypted_key'] = diskEncryptedKey;
    }
    public get diskEncryptedKey() {
        return this['disk_encrypted_key'];
    }
    public withKafkaPrivateConnectAddress(kafkaPrivateConnectAddress: string): ShowInstanceResp {
        this['kafka_private_connect_address'] = kafkaPrivateConnectAddress;
        return this;
    }
    public set kafkaPrivateConnectAddress(kafkaPrivateConnectAddress: string | undefined) {
        this['kafka_private_connect_address'] = kafkaPrivateConnectAddress;
    }
    public get kafkaPrivateConnectAddress() {
        return this['kafka_private_connect_address'];
    }
    public withCesVersion(cesVersion: string): ShowInstanceResp {
        this['ces_version'] = cesVersion;
        return this;
    }
    public set cesVersion(cesVersion: string | undefined) {
        this['ces_version'] = cesVersion;
    }
    public get cesVersion() {
        return this['ces_version'];
    }
    public withPublicAccessEnabled(publicAccessEnabled: string): ShowInstanceResp {
        this['public_access_enabled'] = publicAccessEnabled;
        return this;
    }
    public set publicAccessEnabled(publicAccessEnabled: string | undefined) {
        this['public_access_enabled'] = publicAccessEnabled;
    }
    public get publicAccessEnabled() {
        return this['public_access_enabled'];
    }
    public withNodeNum(nodeNum: number): ShowInstanceResp {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
    public withEnableAcl(enableAcl: boolean): ShowInstanceResp {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl() {
        return this['enable_acl'];
    }
    public withNewSpecBillingEnable(newSpecBillingEnable: boolean): ShowInstanceResp {
        this['new_spec_billing_enable'] = newSpecBillingEnable;
        return this;
    }
    public set newSpecBillingEnable(newSpecBillingEnable: boolean | undefined) {
        this['new_spec_billing_enable'] = newSpecBillingEnable;
    }
    public get newSpecBillingEnable() {
        return this['new_spec_billing_enable'];
    }
    public withBrokerNum(brokerNum: number): ShowInstanceResp {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum() {
        return this['broker_num'];
    }
    public withTags(tags: Array<TagEntity>): ShowInstanceResp {
        this['tags'] = tags;
        return this;
    }
    public withDrEnable(drEnable: boolean): ShowInstanceResp {
        this['dr_enable'] = drEnable;
        return this;
    }
    public set drEnable(drEnable: boolean | undefined) {
        this['dr_enable'] = drEnable;
    }
    public get drEnable() {
        return this['dr_enable'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceRespSaslEnabledMechanismsEnum {
    PLAIN = 'PLAIN',
    SCRAM_SHA_512 = 'SCRAM-SHA-512'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceRespTypeEnum {
    SINGLE = 'single',
    CLUSTER = 'cluster'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceRespRetentionPolicyEnum {
    TIME_BASE = 'time_base',
    PRODUCE_REJECT = 'produce_reject'
}
