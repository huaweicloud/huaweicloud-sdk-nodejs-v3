
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceStatisticsResponse extends SdkResponse {
    private 'storage_used'?: number;
    private 'total_namespace_count'?: number;
    private 'total_image_count'?: number;
    private 'namespace_quota'?: number;
    private 'image_repo_quota'?: number;
    private 'replica_policy_quota'?: number;
    private 'retention_policy_quota'?: number;
    private 'notify_policy_quota'?: number;
    private 'replica_registry_quota'?: number;
    private 'sign_policy_quota'?: number;
    private 'replica_policy_count'?: number;
    private 'retention_policy_count'?: number;
    private 'notify_policy_count'?: number;
    private 'replica_registry_count'?: number;
    private 'intranet_endpoint_quota'?: number;
    private 'intranet_endpoint_count'?: number;
    private 'long_term_quota'?: number;
    private 'sign_policy_count'?: number;
    public constructor() { 
        super();
    }
    public withStorageUsed(storageUsed: number): ListInstanceStatisticsResponse {
        this['storage_used'] = storageUsed;
        return this;
    }
    public set storageUsed(storageUsed: number  | undefined) {
        this['storage_used'] = storageUsed;
    }
    public get storageUsed(): number | undefined {
        return this['storage_used'];
    }
    public withTotalNamespaceCount(totalNamespaceCount: number): ListInstanceStatisticsResponse {
        this['total_namespace_count'] = totalNamespaceCount;
        return this;
    }
    public set totalNamespaceCount(totalNamespaceCount: number  | undefined) {
        this['total_namespace_count'] = totalNamespaceCount;
    }
    public get totalNamespaceCount(): number | undefined {
        return this['total_namespace_count'];
    }
    public withTotalImageCount(totalImageCount: number): ListInstanceStatisticsResponse {
        this['total_image_count'] = totalImageCount;
        return this;
    }
    public set totalImageCount(totalImageCount: number  | undefined) {
        this['total_image_count'] = totalImageCount;
    }
    public get totalImageCount(): number | undefined {
        return this['total_image_count'];
    }
    public withNamespaceQuota(namespaceQuota: number): ListInstanceStatisticsResponse {
        this['namespace_quota'] = namespaceQuota;
        return this;
    }
    public set namespaceQuota(namespaceQuota: number  | undefined) {
        this['namespace_quota'] = namespaceQuota;
    }
    public get namespaceQuota(): number | undefined {
        return this['namespace_quota'];
    }
    public withImageRepoQuota(imageRepoQuota: number): ListInstanceStatisticsResponse {
        this['image_repo_quota'] = imageRepoQuota;
        return this;
    }
    public set imageRepoQuota(imageRepoQuota: number  | undefined) {
        this['image_repo_quota'] = imageRepoQuota;
    }
    public get imageRepoQuota(): number | undefined {
        return this['image_repo_quota'];
    }
    public withReplicaPolicyQuota(replicaPolicyQuota: number): ListInstanceStatisticsResponse {
        this['replica_policy_quota'] = replicaPolicyQuota;
        return this;
    }
    public set replicaPolicyQuota(replicaPolicyQuota: number  | undefined) {
        this['replica_policy_quota'] = replicaPolicyQuota;
    }
    public get replicaPolicyQuota(): number | undefined {
        return this['replica_policy_quota'];
    }
    public withRetentionPolicyQuota(retentionPolicyQuota: number): ListInstanceStatisticsResponse {
        this['retention_policy_quota'] = retentionPolicyQuota;
        return this;
    }
    public set retentionPolicyQuota(retentionPolicyQuota: number  | undefined) {
        this['retention_policy_quota'] = retentionPolicyQuota;
    }
    public get retentionPolicyQuota(): number | undefined {
        return this['retention_policy_quota'];
    }
    public withNotifyPolicyQuota(notifyPolicyQuota: number): ListInstanceStatisticsResponse {
        this['notify_policy_quota'] = notifyPolicyQuota;
        return this;
    }
    public set notifyPolicyQuota(notifyPolicyQuota: number  | undefined) {
        this['notify_policy_quota'] = notifyPolicyQuota;
    }
    public get notifyPolicyQuota(): number | undefined {
        return this['notify_policy_quota'];
    }
    public withReplicaRegistryQuota(replicaRegistryQuota: number): ListInstanceStatisticsResponse {
        this['replica_registry_quota'] = replicaRegistryQuota;
        return this;
    }
    public set replicaRegistryQuota(replicaRegistryQuota: number  | undefined) {
        this['replica_registry_quota'] = replicaRegistryQuota;
    }
    public get replicaRegistryQuota(): number | undefined {
        return this['replica_registry_quota'];
    }
    public withSignPolicyQuota(signPolicyQuota: number): ListInstanceStatisticsResponse {
        this['sign_policy_quota'] = signPolicyQuota;
        return this;
    }
    public set signPolicyQuota(signPolicyQuota: number  | undefined) {
        this['sign_policy_quota'] = signPolicyQuota;
    }
    public get signPolicyQuota(): number | undefined {
        return this['sign_policy_quota'];
    }
    public withReplicaPolicyCount(replicaPolicyCount: number): ListInstanceStatisticsResponse {
        this['replica_policy_count'] = replicaPolicyCount;
        return this;
    }
    public set replicaPolicyCount(replicaPolicyCount: number  | undefined) {
        this['replica_policy_count'] = replicaPolicyCount;
    }
    public get replicaPolicyCount(): number | undefined {
        return this['replica_policy_count'];
    }
    public withRetentionPolicyCount(retentionPolicyCount: number): ListInstanceStatisticsResponse {
        this['retention_policy_count'] = retentionPolicyCount;
        return this;
    }
    public set retentionPolicyCount(retentionPolicyCount: number  | undefined) {
        this['retention_policy_count'] = retentionPolicyCount;
    }
    public get retentionPolicyCount(): number | undefined {
        return this['retention_policy_count'];
    }
    public withNotifyPolicyCount(notifyPolicyCount: number): ListInstanceStatisticsResponse {
        this['notify_policy_count'] = notifyPolicyCount;
        return this;
    }
    public set notifyPolicyCount(notifyPolicyCount: number  | undefined) {
        this['notify_policy_count'] = notifyPolicyCount;
    }
    public get notifyPolicyCount(): number | undefined {
        return this['notify_policy_count'];
    }
    public withReplicaRegistryCount(replicaRegistryCount: number): ListInstanceStatisticsResponse {
        this['replica_registry_count'] = replicaRegistryCount;
        return this;
    }
    public set replicaRegistryCount(replicaRegistryCount: number  | undefined) {
        this['replica_registry_count'] = replicaRegistryCount;
    }
    public get replicaRegistryCount(): number | undefined {
        return this['replica_registry_count'];
    }
    public withIntranetEndpointQuota(intranetEndpointQuota: number): ListInstanceStatisticsResponse {
        this['intranet_endpoint_quota'] = intranetEndpointQuota;
        return this;
    }
    public set intranetEndpointQuota(intranetEndpointQuota: number  | undefined) {
        this['intranet_endpoint_quota'] = intranetEndpointQuota;
    }
    public get intranetEndpointQuota(): number | undefined {
        return this['intranet_endpoint_quota'];
    }
    public withIntranetEndpointCount(intranetEndpointCount: number): ListInstanceStatisticsResponse {
        this['intranet_endpoint_count'] = intranetEndpointCount;
        return this;
    }
    public set intranetEndpointCount(intranetEndpointCount: number  | undefined) {
        this['intranet_endpoint_count'] = intranetEndpointCount;
    }
    public get intranetEndpointCount(): number | undefined {
        return this['intranet_endpoint_count'];
    }
    public withLongTermQuota(longTermQuota: number): ListInstanceStatisticsResponse {
        this['long_term_quota'] = longTermQuota;
        return this;
    }
    public set longTermQuota(longTermQuota: number  | undefined) {
        this['long_term_quota'] = longTermQuota;
    }
    public get longTermQuota(): number | undefined {
        return this['long_term_quota'];
    }
    public withSignPolicyCount(signPolicyCount: number): ListInstanceStatisticsResponse {
        this['sign_policy_count'] = signPolicyCount;
        return this;
    }
    public set signPolicyCount(signPolicyCount: number  | undefined) {
        this['sign_policy_count'] = signPolicyCount;
    }
    public get signPolicyCount(): number | undefined {
        return this['sign_policy_count'];
    }
}