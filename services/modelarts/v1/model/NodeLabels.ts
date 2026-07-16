

export class NodeLabels {
    private 'os.modelarts.node/cluster'?: string;
    private 'os.modelarts.node/elastic.quota'?: string;
    private 'os.modelarts.node/nodepool'?: string;
    private 'os.modelarts.node/batch.uid'?: string;
    private 'os.modelarts.node/batch.name'?: string;
    private 'os.modelarts.node/batch.type'?: string;
    private 'os.modelarts.node/batch.count'?: string;
    private 'os.modelarts/resource.id'?: string;
    private 'os.modelarts/tenant.domain.id'?: string;
    private 'os.modelarts/tenant.project.id'?: string;
    private 'os.modelarts/billing.status'?: string;
    private 'os.modelarts.node/volcano.scheduler.cabinet-exclusive'?: string;
    private 'cce.kubectl.kubernetes.io/cabinet'?: string;
    private 'os.modelarts.node/underlying.instance.id'?: string;
    private 'os.modelarts.node/ha.redundant.enabled'?: string;
    private 'os.modelarts.node/nodepoolname'?: string;
    public constructor() { 
    }
    public withOsModelartsNodeCluster(osModelartsNodeCluster: string): NodeLabels {
        this['os.modelarts.node/cluster'] = osModelartsNodeCluster;
        return this;
    }
    public set osModelartsNodeCluster(osModelartsNodeCluster: string  | undefined) {
        this['os.modelarts.node/cluster'] = osModelartsNodeCluster;
    }
    public get osModelartsNodeCluster(): string | undefined {
        return this['os.modelarts.node/cluster'];
    }
    public withOsModelartsNodeElasticQuota(osModelartsNodeElasticQuota: string): NodeLabels {
        this['os.modelarts.node/elastic.quota'] = osModelartsNodeElasticQuota;
        return this;
    }
    public set osModelartsNodeElasticQuota(osModelartsNodeElasticQuota: string  | undefined) {
        this['os.modelarts.node/elastic.quota'] = osModelartsNodeElasticQuota;
    }
    public get osModelartsNodeElasticQuota(): string | undefined {
        return this['os.modelarts.node/elastic.quota'];
    }
    public withOsModelartsNodeNodepool(osModelartsNodeNodepool: string): NodeLabels {
        this['os.modelarts.node/nodepool'] = osModelartsNodeNodepool;
        return this;
    }
    public set osModelartsNodeNodepool(osModelartsNodeNodepool: string  | undefined) {
        this['os.modelarts.node/nodepool'] = osModelartsNodeNodepool;
    }
    public get osModelartsNodeNodepool(): string | undefined {
        return this['os.modelarts.node/nodepool'];
    }
    public withOsModelartsNodeBatchUid(osModelartsNodeBatchUid: string): NodeLabels {
        this['os.modelarts.node/batch.uid'] = osModelartsNodeBatchUid;
        return this;
    }
    public set osModelartsNodeBatchUid(osModelartsNodeBatchUid: string  | undefined) {
        this['os.modelarts.node/batch.uid'] = osModelartsNodeBatchUid;
    }
    public get osModelartsNodeBatchUid(): string | undefined {
        return this['os.modelarts.node/batch.uid'];
    }
    public withOsModelartsNodeBatchName(osModelartsNodeBatchName: string): NodeLabels {
        this['os.modelarts.node/batch.name'] = osModelartsNodeBatchName;
        return this;
    }
    public set osModelartsNodeBatchName(osModelartsNodeBatchName: string  | undefined) {
        this['os.modelarts.node/batch.name'] = osModelartsNodeBatchName;
    }
    public get osModelartsNodeBatchName(): string | undefined {
        return this['os.modelarts.node/batch.name'];
    }
    public withOsModelartsNodeBatchType(osModelartsNodeBatchType: string): NodeLabels {
        this['os.modelarts.node/batch.type'] = osModelartsNodeBatchType;
        return this;
    }
    public set osModelartsNodeBatchType(osModelartsNodeBatchType: string  | undefined) {
        this['os.modelarts.node/batch.type'] = osModelartsNodeBatchType;
    }
    public get osModelartsNodeBatchType(): string | undefined {
        return this['os.modelarts.node/batch.type'];
    }
    public withOsModelartsNodeBatchCount(osModelartsNodeBatchCount: string): NodeLabels {
        this['os.modelarts.node/batch.count'] = osModelartsNodeBatchCount;
        return this;
    }
    public set osModelartsNodeBatchCount(osModelartsNodeBatchCount: string  | undefined) {
        this['os.modelarts.node/batch.count'] = osModelartsNodeBatchCount;
    }
    public get osModelartsNodeBatchCount(): string | undefined {
        return this['os.modelarts.node/batch.count'];
    }
    public withOsModelartsResourceId(osModelartsResourceId: string): NodeLabels {
        this['os.modelarts/resource.id'] = osModelartsResourceId;
        return this;
    }
    public set osModelartsResourceId(osModelartsResourceId: string  | undefined) {
        this['os.modelarts/resource.id'] = osModelartsResourceId;
    }
    public get osModelartsResourceId(): string | undefined {
        return this['os.modelarts/resource.id'];
    }
    public withOsModelartsTenantDomainId(osModelartsTenantDomainId: string): NodeLabels {
        this['os.modelarts/tenant.domain.id'] = osModelartsTenantDomainId;
        return this;
    }
    public set osModelartsTenantDomainId(osModelartsTenantDomainId: string  | undefined) {
        this['os.modelarts/tenant.domain.id'] = osModelartsTenantDomainId;
    }
    public get osModelartsTenantDomainId(): string | undefined {
        return this['os.modelarts/tenant.domain.id'];
    }
    public withOsModelartsTenantProjectId(osModelartsTenantProjectId: string): NodeLabels {
        this['os.modelarts/tenant.project.id'] = osModelartsTenantProjectId;
        return this;
    }
    public set osModelartsTenantProjectId(osModelartsTenantProjectId: string  | undefined) {
        this['os.modelarts/tenant.project.id'] = osModelartsTenantProjectId;
    }
    public get osModelartsTenantProjectId(): string | undefined {
        return this['os.modelarts/tenant.project.id'];
    }
    public withOsModelartsBillingStatus(osModelartsBillingStatus: string): NodeLabels {
        this['os.modelarts/billing.status'] = osModelartsBillingStatus;
        return this;
    }
    public set osModelartsBillingStatus(osModelartsBillingStatus: string  | undefined) {
        this['os.modelarts/billing.status'] = osModelartsBillingStatus;
    }
    public get osModelartsBillingStatus(): string | undefined {
        return this['os.modelarts/billing.status'];
    }
    public withOsModelartsNodeVolcanoSchedulerCabinetExclusive(osModelartsNodeVolcanoSchedulerCabinetExclusive: string): NodeLabels {
        this['os.modelarts.node/volcano.scheduler.cabinet-exclusive'] = osModelartsNodeVolcanoSchedulerCabinetExclusive;
        return this;
    }
    public set osModelartsNodeVolcanoSchedulerCabinetExclusive(osModelartsNodeVolcanoSchedulerCabinetExclusive: string  | undefined) {
        this['os.modelarts.node/volcano.scheduler.cabinet-exclusive'] = osModelartsNodeVolcanoSchedulerCabinetExclusive;
    }
    public get osModelartsNodeVolcanoSchedulerCabinetExclusive(): string | undefined {
        return this['os.modelarts.node/volcano.scheduler.cabinet-exclusive'];
    }
    public withCceKubectlKubernetesIoCabinet(cceKubectlKubernetesIoCabinet: string): NodeLabels {
        this['cce.kubectl.kubernetes.io/cabinet'] = cceKubectlKubernetesIoCabinet;
        return this;
    }
    public set cceKubectlKubernetesIoCabinet(cceKubectlKubernetesIoCabinet: string  | undefined) {
        this['cce.kubectl.kubernetes.io/cabinet'] = cceKubectlKubernetesIoCabinet;
    }
    public get cceKubectlKubernetesIoCabinet(): string | undefined {
        return this['cce.kubectl.kubernetes.io/cabinet'];
    }
    public withOsModelartsNodeUnderlyingInstanceId(osModelartsNodeUnderlyingInstanceId: string): NodeLabels {
        this['os.modelarts.node/underlying.instance.id'] = osModelartsNodeUnderlyingInstanceId;
        return this;
    }
    public set osModelartsNodeUnderlyingInstanceId(osModelartsNodeUnderlyingInstanceId: string  | undefined) {
        this['os.modelarts.node/underlying.instance.id'] = osModelartsNodeUnderlyingInstanceId;
    }
    public get osModelartsNodeUnderlyingInstanceId(): string | undefined {
        return this['os.modelarts.node/underlying.instance.id'];
    }
    public withOsModelartsNodeHaRedundantEnabled(osModelartsNodeHaRedundantEnabled: string): NodeLabels {
        this['os.modelarts.node/ha.redundant.enabled'] = osModelartsNodeHaRedundantEnabled;
        return this;
    }
    public set osModelartsNodeHaRedundantEnabled(osModelartsNodeHaRedundantEnabled: string  | undefined) {
        this['os.modelarts.node/ha.redundant.enabled'] = osModelartsNodeHaRedundantEnabled;
    }
    public get osModelartsNodeHaRedundantEnabled(): string | undefined {
        return this['os.modelarts.node/ha.redundant.enabled'];
    }
    public withOsModelartsNodeNodepoolname(osModelartsNodeNodepoolname: string): NodeLabels {
        this['os.modelarts.node/nodepoolname'] = osModelartsNodeNodepoolname;
        return this;
    }
    public set osModelartsNodeNodepoolname(osModelartsNodeNodepoolname: string  | undefined) {
        this['os.modelarts.node/nodepoolname'] = osModelartsNodeNodepoolname;
    }
    public get osModelartsNodeNodepoolname(): string | undefined {
        return this['os.modelarts.node/nodepoolname'];
    }
}