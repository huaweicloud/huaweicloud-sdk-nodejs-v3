import { TagEntity } from './TagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    public name?: string;
    public engine?: string;
    private 'engine_version'?: string;
    public description?: string;
    public specification?: string;
    private 'storage_space'?: number;
    private 'partition_num'?: string;
    private 'used_storage_space'?: number;
    private 'connect_address'?: string;
    public port?: number;
    public status?: string;
    private 'instance_id'?: string;
    private 'resource_spec_code'?: string;
    private 'charging_mode'?: number;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'created_at'?: string;
    private 'subnet_name'?: string;
    private 'subnet_cidr'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'access_user'?: string;
    private 'order_id'?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'enable_publicip'?: boolean;
    private 'management_connect_address'?: string;
    private 'ssl_enable'?: boolean;
    private 'broker_ssl_enable'?: boolean;
    private 'kafka_security_protocol'?: string;
    private 'sasl_enabled_mechanisms'?: Array<ShowInstanceResponseSaslEnabledMechanismsEnum> | Array<string>;
    private 'ssl_two_way_enable'?: boolean;
    private 'cert_replaced'?: boolean;
    private 'public_management_connect_address'?: string;
    private 'enterprise_project_id'?: string;
    private 'is_logical_volume'?: boolean;
    private 'extend_times'?: number;
    private 'enable_auto_topic'?: boolean;
    public type?: ShowInstanceResponseTypeEnum | string;
    private 'product_id'?: string;
    private 'security_group_id'?: string;
    private 'security_group_name'?: string;
    private 'subnet_id'?: string;
    private 'available_zones'?: Array<string>;
    private 'available_zone_names'?: Array<string>;
    private 'total_storage_space'?: number;
    private 'public_connect_address'?: string;
    private 'storage_resource_id'?: string;
    private 'storage_spec_code'?: string;
    private 'service_type'?: string;
    private 'storage_type'?: string;
    private 'retention_policy'?: ShowInstanceResponseRetentionPolicyEnum | string;
    private 'kafka_public_status'?: string;
    private 'public_bandwidth'?: number;
    private 'kafka_manager_enable'?: boolean;
    private 'kafka_manager_user'?: string;
    private 'enable_log_collection'?: boolean;
    private 'new_auth_cert'?: boolean;
    private 'cross_vpc_info'?: string;
    private 'ipv6_enable'?: boolean;
    private 'ipv6_connect_addresses'?: Array<string>;
    private 'connector_enable'?: boolean;
    private 'connector_node_num'?: number;
    private 'connector_id'?: string;
    private 'rest_enable'?: boolean;
    private 'rest_connect_address'?: string;
    private 'public_boundwidth'?: number;
    private 'message_query_inst_enable'?: boolean;
    private 'vpc_client_plain'?: boolean;
    private 'support_features'?: string;
    private 'trace_enable'?: boolean;
    private 'agent_enable'?: boolean;
    private 'pod_connect_address'?: string;
    private 'disk_encrypted'?: boolean;
    private 'disk_encrypted_key'?: string;
    private 'kafka_private_connect_address'?: string;
    private 'ces_version'?: string;
    private 'public_access_enabled'?: string;
    private 'node_num'?: number;
    private 'enable_acl'?: boolean;
    private 'new_spec_billing_enable'?: boolean;
    private 'broker_num'?: number;
    public tags?: Array<TagEntity>;
    private 'dr_enable'?: boolean;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: string): ShowInstanceResponse {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ShowInstanceResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withDescription(description: string): ShowInstanceResponse {
        this['description'] = description;
        return this;
    }
    public withSpecification(specification: string): ShowInstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withStorageSpace(storageSpace: number): ShowInstanceResponse {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number  | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace(): number | undefined {
        return this['storage_space'];
    }
    public withPartitionNum(partitionNum: string): ShowInstanceResponse {
        this['partition_num'] = partitionNum;
        return this;
    }
    public set partitionNum(partitionNum: string  | undefined) {
        this['partition_num'] = partitionNum;
    }
    public get partitionNum(): string | undefined {
        return this['partition_num'];
    }
    public withUsedStorageSpace(usedStorageSpace: number): ShowInstanceResponse {
        this['used_storage_space'] = usedStorageSpace;
        return this;
    }
    public set usedStorageSpace(usedStorageSpace: number  | undefined) {
        this['used_storage_space'] = usedStorageSpace;
    }
    public get usedStorageSpace(): number | undefined {
        return this['used_storage_space'];
    }
    public withConnectAddress(connectAddress: string): ShowInstanceResponse {
        this['connect_address'] = connectAddress;
        return this;
    }
    public set connectAddress(connectAddress: string  | undefined) {
        this['connect_address'] = connectAddress;
    }
    public get connectAddress(): string | undefined {
        return this['connect_address'];
    }
    public withPort(port: number): ShowInstanceResponse {
        this['port'] = port;
        return this;
    }
    public withStatus(status: string): ShowInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): ShowInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowInstanceResponse {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withChargingMode(chargingMode: number): ShowInstanceResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withVpcId(vpcId: string): ShowInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): ShowInstanceResponse {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withCreatedAt(createdAt: string): ShowInstanceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSubnetName(subnetName: string): ShowInstanceResponse {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withSubnetCidr(subnetCidr: string): ShowInstanceResponse {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withUserId(userId: string): ShowInstanceResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowInstanceResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAccessUser(accessUser: string): ShowInstanceResponse {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string  | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser(): string | undefined {
        return this['access_user'];
    }
    public withOrderId(orderId: string): ShowInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withMaintainBegin(maintainBegin: string): ShowInstanceResponse {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): ShowInstanceResponse {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): ShowInstanceResponse {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
        return this['enable_publicip'];
    }
    public withManagementConnectAddress(managementConnectAddress: string): ShowInstanceResponse {
        this['management_connect_address'] = managementConnectAddress;
        return this;
    }
    public set managementConnectAddress(managementConnectAddress: string  | undefined) {
        this['management_connect_address'] = managementConnectAddress;
    }
    public get managementConnectAddress(): string | undefined {
        return this['management_connect_address'];
    }
    public withSslEnable(sslEnable: boolean): ShowInstanceResponse {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withBrokerSslEnable(brokerSslEnable: boolean): ShowInstanceResponse {
        this['broker_ssl_enable'] = brokerSslEnable;
        return this;
    }
    public set brokerSslEnable(brokerSslEnable: boolean  | undefined) {
        this['broker_ssl_enable'] = brokerSslEnable;
    }
    public get brokerSslEnable(): boolean | undefined {
        return this['broker_ssl_enable'];
    }
    public withKafkaSecurityProtocol(kafkaSecurityProtocol: string): ShowInstanceResponse {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
        return this;
    }
    public set kafkaSecurityProtocol(kafkaSecurityProtocol: string  | undefined) {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
    }
    public get kafkaSecurityProtocol(): string | undefined {
        return this['kafka_security_protocol'];
    }
    public withSaslEnabledMechanisms(saslEnabledMechanisms: Array<ShowInstanceResponseSaslEnabledMechanismsEnum> | Array<string>): ShowInstanceResponse {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
        return this;
    }
    public set saslEnabledMechanisms(saslEnabledMechanisms: Array<ShowInstanceResponseSaslEnabledMechanismsEnum> | Array<string>  | undefined) {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
    }
    public get saslEnabledMechanisms(): Array<ShowInstanceResponseSaslEnabledMechanismsEnum> | Array<string> | undefined {
        return this['sasl_enabled_mechanisms'];
    }
    public withSslTwoWayEnable(sslTwoWayEnable: boolean): ShowInstanceResponse {
        this['ssl_two_way_enable'] = sslTwoWayEnable;
        return this;
    }
    public set sslTwoWayEnable(sslTwoWayEnable: boolean  | undefined) {
        this['ssl_two_way_enable'] = sslTwoWayEnable;
    }
    public get sslTwoWayEnable(): boolean | undefined {
        return this['ssl_two_way_enable'];
    }
    public withCertReplaced(certReplaced: boolean): ShowInstanceResponse {
        this['cert_replaced'] = certReplaced;
        return this;
    }
    public set certReplaced(certReplaced: boolean  | undefined) {
        this['cert_replaced'] = certReplaced;
    }
    public get certReplaced(): boolean | undefined {
        return this['cert_replaced'];
    }
    public withPublicManagementConnectAddress(publicManagementConnectAddress: string): ShowInstanceResponse {
        this['public_management_connect_address'] = publicManagementConnectAddress;
        return this;
    }
    public set publicManagementConnectAddress(publicManagementConnectAddress: string  | undefined) {
        this['public_management_connect_address'] = publicManagementConnectAddress;
    }
    public get publicManagementConnectAddress(): string | undefined {
        return this['public_management_connect_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIsLogicalVolume(isLogicalVolume: boolean): ShowInstanceResponse {
        this['is_logical_volume'] = isLogicalVolume;
        return this;
    }
    public set isLogicalVolume(isLogicalVolume: boolean  | undefined) {
        this['is_logical_volume'] = isLogicalVolume;
    }
    public get isLogicalVolume(): boolean | undefined {
        return this['is_logical_volume'];
    }
    public withExtendTimes(extendTimes: number): ShowInstanceResponse {
        this['extend_times'] = extendTimes;
        return this;
    }
    public set extendTimes(extendTimes: number  | undefined) {
        this['extend_times'] = extendTimes;
    }
    public get extendTimes(): number | undefined {
        return this['extend_times'];
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): ShowInstanceResponse {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean  | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic(): boolean | undefined {
        return this['enable_auto_topic'];
    }
    public withType(type: ShowInstanceResponseTypeEnum | string): ShowInstanceResponse {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ShowInstanceResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ShowInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSecurityGroupName(securityGroupName: string): ShowInstanceResponse {
        this['security_group_name'] = securityGroupName;
        return this;
    }
    public set securityGroupName(securityGroupName: string  | undefined) {
        this['security_group_name'] = securityGroupName;
    }
    public get securityGroupName(): string | undefined {
        return this['security_group_name'];
    }
    public withSubnetId(subnetId: string): ShowInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): ShowInstanceResponse {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withAvailableZoneNames(availableZoneNames: Array<string>): ShowInstanceResponse {
        this['available_zone_names'] = availableZoneNames;
        return this;
    }
    public set availableZoneNames(availableZoneNames: Array<string>  | undefined) {
        this['available_zone_names'] = availableZoneNames;
    }
    public get availableZoneNames(): Array<string> | undefined {
        return this['available_zone_names'];
    }
    public withTotalStorageSpace(totalStorageSpace: number): ShowInstanceResponse {
        this['total_storage_space'] = totalStorageSpace;
        return this;
    }
    public set totalStorageSpace(totalStorageSpace: number  | undefined) {
        this['total_storage_space'] = totalStorageSpace;
    }
    public get totalStorageSpace(): number | undefined {
        return this['total_storage_space'];
    }
    public withPublicConnectAddress(publicConnectAddress: string): ShowInstanceResponse {
        this['public_connect_address'] = publicConnectAddress;
        return this;
    }
    public set publicConnectAddress(publicConnectAddress: string  | undefined) {
        this['public_connect_address'] = publicConnectAddress;
    }
    public get publicConnectAddress(): string | undefined {
        return this['public_connect_address'];
    }
    public withStorageResourceId(storageResourceId: string): ShowInstanceResponse {
        this['storage_resource_id'] = storageResourceId;
        return this;
    }
    public set storageResourceId(storageResourceId: string  | undefined) {
        this['storage_resource_id'] = storageResourceId;
    }
    public get storageResourceId(): string | undefined {
        return this['storage_resource_id'];
    }
    public withStorageSpecCode(storageSpecCode: string): ShowInstanceResponse {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: string  | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode(): string | undefined {
        return this['storage_spec_code'];
    }
    public withServiceType(serviceType: string): ShowInstanceResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withStorageType(storageType: string): ShowInstanceResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withRetentionPolicy(retentionPolicy: ShowInstanceResponseRetentionPolicyEnum | string): ShowInstanceResponse {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: ShowInstanceResponseRetentionPolicyEnum | string  | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy(): ShowInstanceResponseRetentionPolicyEnum | string | undefined {
        return this['retention_policy'];
    }
    public withKafkaPublicStatus(kafkaPublicStatus: string): ShowInstanceResponse {
        this['kafka_public_status'] = kafkaPublicStatus;
        return this;
    }
    public set kafkaPublicStatus(kafkaPublicStatus: string  | undefined) {
        this['kafka_public_status'] = kafkaPublicStatus;
    }
    public get kafkaPublicStatus(): string | undefined {
        return this['kafka_public_status'];
    }
    public withPublicBandwidth(publicBandwidth: number): ShowInstanceResponse {
        this['public_bandwidth'] = publicBandwidth;
        return this;
    }
    public set publicBandwidth(publicBandwidth: number  | undefined) {
        this['public_bandwidth'] = publicBandwidth;
    }
    public get publicBandwidth(): number | undefined {
        return this['public_bandwidth'];
    }
    public withKafkaManagerEnable(kafkaManagerEnable: boolean): ShowInstanceResponse {
        this['kafka_manager_enable'] = kafkaManagerEnable;
        return this;
    }
    public set kafkaManagerEnable(kafkaManagerEnable: boolean  | undefined) {
        this['kafka_manager_enable'] = kafkaManagerEnable;
    }
    public get kafkaManagerEnable(): boolean | undefined {
        return this['kafka_manager_enable'];
    }
    public withKafkaManagerUser(kafkaManagerUser: string): ShowInstanceResponse {
        this['kafka_manager_user'] = kafkaManagerUser;
        return this;
    }
    public set kafkaManagerUser(kafkaManagerUser: string  | undefined) {
        this['kafka_manager_user'] = kafkaManagerUser;
    }
    public get kafkaManagerUser(): string | undefined {
        return this['kafka_manager_user'];
    }
    public withEnableLogCollection(enableLogCollection: boolean): ShowInstanceResponse {
        this['enable_log_collection'] = enableLogCollection;
        return this;
    }
    public set enableLogCollection(enableLogCollection: boolean  | undefined) {
        this['enable_log_collection'] = enableLogCollection;
    }
    public get enableLogCollection(): boolean | undefined {
        return this['enable_log_collection'];
    }
    public withNewAuthCert(newAuthCert: boolean): ShowInstanceResponse {
        this['new_auth_cert'] = newAuthCert;
        return this;
    }
    public set newAuthCert(newAuthCert: boolean  | undefined) {
        this['new_auth_cert'] = newAuthCert;
    }
    public get newAuthCert(): boolean | undefined {
        return this['new_auth_cert'];
    }
    public withCrossVpcInfo(crossVpcInfo: string): ShowInstanceResponse {
        this['cross_vpc_info'] = crossVpcInfo;
        return this;
    }
    public set crossVpcInfo(crossVpcInfo: string  | undefined) {
        this['cross_vpc_info'] = crossVpcInfo;
    }
    public get crossVpcInfo(): string | undefined {
        return this['cross_vpc_info'];
    }
    public withIpv6Enable(ipv6Enable: boolean): ShowInstanceResponse {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6ConnectAddresses(ipv6ConnectAddresses: Array<string>): ShowInstanceResponse {
        this['ipv6_connect_addresses'] = ipv6ConnectAddresses;
        return this;
    }
    public set ipv6ConnectAddresses(ipv6ConnectAddresses: Array<string>  | undefined) {
        this['ipv6_connect_addresses'] = ipv6ConnectAddresses;
    }
    public get ipv6ConnectAddresses(): Array<string> | undefined {
        return this['ipv6_connect_addresses'];
    }
    public withConnectorEnable(connectorEnable: boolean): ShowInstanceResponse {
        this['connector_enable'] = connectorEnable;
        return this;
    }
    public set connectorEnable(connectorEnable: boolean  | undefined) {
        this['connector_enable'] = connectorEnable;
    }
    public get connectorEnable(): boolean | undefined {
        return this['connector_enable'];
    }
    public withConnectorNodeNum(connectorNodeNum: number): ShowInstanceResponse {
        this['connector_node_num'] = connectorNodeNum;
        return this;
    }
    public set connectorNodeNum(connectorNodeNum: number  | undefined) {
        this['connector_node_num'] = connectorNodeNum;
    }
    public get connectorNodeNum(): number | undefined {
        return this['connector_node_num'];
    }
    public withConnectorId(connectorId: string): ShowInstanceResponse {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withRestEnable(restEnable: boolean): ShowInstanceResponse {
        this['rest_enable'] = restEnable;
        return this;
    }
    public set restEnable(restEnable: boolean  | undefined) {
        this['rest_enable'] = restEnable;
    }
    public get restEnable(): boolean | undefined {
        return this['rest_enable'];
    }
    public withRestConnectAddress(restConnectAddress: string): ShowInstanceResponse {
        this['rest_connect_address'] = restConnectAddress;
        return this;
    }
    public set restConnectAddress(restConnectAddress: string  | undefined) {
        this['rest_connect_address'] = restConnectAddress;
    }
    public get restConnectAddress(): string | undefined {
        return this['rest_connect_address'];
    }
    public withPublicBoundwidth(publicBoundwidth: number): ShowInstanceResponse {
        this['public_boundwidth'] = publicBoundwidth;
        return this;
    }
    public set publicBoundwidth(publicBoundwidth: number  | undefined) {
        this['public_boundwidth'] = publicBoundwidth;
    }
    public get publicBoundwidth(): number | undefined {
        return this['public_boundwidth'];
    }
    public withMessageQueryInstEnable(messageQueryInstEnable: boolean): ShowInstanceResponse {
        this['message_query_inst_enable'] = messageQueryInstEnable;
        return this;
    }
    public set messageQueryInstEnable(messageQueryInstEnable: boolean  | undefined) {
        this['message_query_inst_enable'] = messageQueryInstEnable;
    }
    public get messageQueryInstEnable(): boolean | undefined {
        return this['message_query_inst_enable'];
    }
    public withVpcClientPlain(vpcClientPlain: boolean): ShowInstanceResponse {
        this['vpc_client_plain'] = vpcClientPlain;
        return this;
    }
    public set vpcClientPlain(vpcClientPlain: boolean  | undefined) {
        this['vpc_client_plain'] = vpcClientPlain;
    }
    public get vpcClientPlain(): boolean | undefined {
        return this['vpc_client_plain'];
    }
    public withSupportFeatures(supportFeatures: string): ShowInstanceResponse {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: string  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): string | undefined {
        return this['support_features'];
    }
    public withTraceEnable(traceEnable: boolean): ShowInstanceResponse {
        this['trace_enable'] = traceEnable;
        return this;
    }
    public set traceEnable(traceEnable: boolean  | undefined) {
        this['trace_enable'] = traceEnable;
    }
    public get traceEnable(): boolean | undefined {
        return this['trace_enable'];
    }
    public withAgentEnable(agentEnable: boolean): ShowInstanceResponse {
        this['agent_enable'] = agentEnable;
        return this;
    }
    public set agentEnable(agentEnable: boolean  | undefined) {
        this['agent_enable'] = agentEnable;
    }
    public get agentEnable(): boolean | undefined {
        return this['agent_enable'];
    }
    public withPodConnectAddress(podConnectAddress: string): ShowInstanceResponse {
        this['pod_connect_address'] = podConnectAddress;
        return this;
    }
    public set podConnectAddress(podConnectAddress: string  | undefined) {
        this['pod_connect_address'] = podConnectAddress;
    }
    public get podConnectAddress(): string | undefined {
        return this['pod_connect_address'];
    }
    public withDiskEncrypted(diskEncrypted: boolean): ShowInstanceResponse {
        this['disk_encrypted'] = diskEncrypted;
        return this;
    }
    public set diskEncrypted(diskEncrypted: boolean  | undefined) {
        this['disk_encrypted'] = diskEncrypted;
    }
    public get diskEncrypted(): boolean | undefined {
        return this['disk_encrypted'];
    }
    public withDiskEncryptedKey(diskEncryptedKey: string): ShowInstanceResponse {
        this['disk_encrypted_key'] = diskEncryptedKey;
        return this;
    }
    public set diskEncryptedKey(diskEncryptedKey: string  | undefined) {
        this['disk_encrypted_key'] = diskEncryptedKey;
    }
    public get diskEncryptedKey(): string | undefined {
        return this['disk_encrypted_key'];
    }
    public withKafkaPrivateConnectAddress(kafkaPrivateConnectAddress: string): ShowInstanceResponse {
        this['kafka_private_connect_address'] = kafkaPrivateConnectAddress;
        return this;
    }
    public set kafkaPrivateConnectAddress(kafkaPrivateConnectAddress: string  | undefined) {
        this['kafka_private_connect_address'] = kafkaPrivateConnectAddress;
    }
    public get kafkaPrivateConnectAddress(): string | undefined {
        return this['kafka_private_connect_address'];
    }
    public withCesVersion(cesVersion: string): ShowInstanceResponse {
        this['ces_version'] = cesVersion;
        return this;
    }
    public set cesVersion(cesVersion: string  | undefined) {
        this['ces_version'] = cesVersion;
    }
    public get cesVersion(): string | undefined {
        return this['ces_version'];
    }
    public withPublicAccessEnabled(publicAccessEnabled: string): ShowInstanceResponse {
        this['public_access_enabled'] = publicAccessEnabled;
        return this;
    }
    public set publicAccessEnabled(publicAccessEnabled: string  | undefined) {
        this['public_access_enabled'] = publicAccessEnabled;
    }
    public get publicAccessEnabled(): string | undefined {
        return this['public_access_enabled'];
    }
    public withNodeNum(nodeNum: number): ShowInstanceResponse {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withEnableAcl(enableAcl: boolean): ShowInstanceResponse {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
    public withNewSpecBillingEnable(newSpecBillingEnable: boolean): ShowInstanceResponse {
        this['new_spec_billing_enable'] = newSpecBillingEnable;
        return this;
    }
    public set newSpecBillingEnable(newSpecBillingEnable: boolean  | undefined) {
        this['new_spec_billing_enable'] = newSpecBillingEnable;
    }
    public get newSpecBillingEnable(): boolean | undefined {
        return this['new_spec_billing_enable'];
    }
    public withBrokerNum(brokerNum: number): ShowInstanceResponse {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): number | undefined {
        return this['broker_num'];
    }
    public withTags(tags: Array<TagEntity>): ShowInstanceResponse {
        this['tags'] = tags;
        return this;
    }
    public withDrEnable(drEnable: boolean): ShowInstanceResponse {
        this['dr_enable'] = drEnable;
        return this;
    }
    public set drEnable(drEnable: boolean  | undefined) {
        this['dr_enable'] = drEnable;
    }
    public get drEnable(): boolean | undefined {
        return this['dr_enable'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseSaslEnabledMechanismsEnum {
    PLAIN = 'PLAIN',
    SCRAM_SHA_512 = 'SCRAM-SHA-512'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseTypeEnum {
    SINGLE = 'single',
    CLUSTER = 'cluster'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseRetentionPolicyEnum {
    TIME_BASE = 'time_base',
    PRODUCE_REJECT = 'produce_reject'
}
