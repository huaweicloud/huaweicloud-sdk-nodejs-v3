

export class MultiCloudClusterCreateRequestBody {
    public name?: string;
    public provider?: string;
    public server?: string;
    private 'image_repo'?: string;
    private 'image_repo_username'?: string;
    private 'image_repo_password'?: string;
    public organization?: string;
    private 'image_repo_type'?: string;
    private 'current_expiration_date'?: number;
    private 'certificate_expiration_date'?: number;
    private 'kube_config'?: string;
    private 'image_arch'?: string;
    private 'anp_proxy'?: string;
    private 'hostguard_proxy'?: string;
    private 'container_name'?: string;
    private 'dns_policy'?: string;
    private 'dns_config'?: string;
    public constructor(kubeConfig?: string) { 
        this['kube_config'] = kubeConfig;
    }
    public withName(name: string): MultiCloudClusterCreateRequestBody {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): MultiCloudClusterCreateRequestBody {
        this['provider'] = provider;
        return this;
    }
    public withServer(server: string): MultiCloudClusterCreateRequestBody {
        this['server'] = server;
        return this;
    }
    public withImageRepo(imageRepo: string): MultiCloudClusterCreateRequestBody {
        this['image_repo'] = imageRepo;
        return this;
    }
    public set imageRepo(imageRepo: string  | undefined) {
        this['image_repo'] = imageRepo;
    }
    public get imageRepo(): string | undefined {
        return this['image_repo'];
    }
    public withImageRepoUsername(imageRepoUsername: string): MultiCloudClusterCreateRequestBody {
        this['image_repo_username'] = imageRepoUsername;
        return this;
    }
    public set imageRepoUsername(imageRepoUsername: string  | undefined) {
        this['image_repo_username'] = imageRepoUsername;
    }
    public get imageRepoUsername(): string | undefined {
        return this['image_repo_username'];
    }
    public withImageRepoPassword(imageRepoPassword: string): MultiCloudClusterCreateRequestBody {
        this['image_repo_password'] = imageRepoPassword;
        return this;
    }
    public set imageRepoPassword(imageRepoPassword: string  | undefined) {
        this['image_repo_password'] = imageRepoPassword;
    }
    public get imageRepoPassword(): string | undefined {
        return this['image_repo_password'];
    }
    public withOrganization(organization: string): MultiCloudClusterCreateRequestBody {
        this['organization'] = organization;
        return this;
    }
    public withImageRepoType(imageRepoType: string): MultiCloudClusterCreateRequestBody {
        this['image_repo_type'] = imageRepoType;
        return this;
    }
    public set imageRepoType(imageRepoType: string  | undefined) {
        this['image_repo_type'] = imageRepoType;
    }
    public get imageRepoType(): string | undefined {
        return this['image_repo_type'];
    }
    public withCurrentExpirationDate(currentExpirationDate: number): MultiCloudClusterCreateRequestBody {
        this['current_expiration_date'] = currentExpirationDate;
        return this;
    }
    public set currentExpirationDate(currentExpirationDate: number  | undefined) {
        this['current_expiration_date'] = currentExpirationDate;
    }
    public get currentExpirationDate(): number | undefined {
        return this['current_expiration_date'];
    }
    public withCertificateExpirationDate(certificateExpirationDate: number): MultiCloudClusterCreateRequestBody {
        this['certificate_expiration_date'] = certificateExpirationDate;
        return this;
    }
    public set certificateExpirationDate(certificateExpirationDate: number  | undefined) {
        this['certificate_expiration_date'] = certificateExpirationDate;
    }
    public get certificateExpirationDate(): number | undefined {
        return this['certificate_expiration_date'];
    }
    public withKubeConfig(kubeConfig: string): MultiCloudClusterCreateRequestBody {
        this['kube_config'] = kubeConfig;
        return this;
    }
    public set kubeConfig(kubeConfig: string  | undefined) {
        this['kube_config'] = kubeConfig;
    }
    public get kubeConfig(): string | undefined {
        return this['kube_config'];
    }
    public withImageArch(imageArch: string): MultiCloudClusterCreateRequestBody {
        this['image_arch'] = imageArch;
        return this;
    }
    public set imageArch(imageArch: string  | undefined) {
        this['image_arch'] = imageArch;
    }
    public get imageArch(): string | undefined {
        return this['image_arch'];
    }
    public withAnpProxy(anpProxy: string): MultiCloudClusterCreateRequestBody {
        this['anp_proxy'] = anpProxy;
        return this;
    }
    public set anpProxy(anpProxy: string  | undefined) {
        this['anp_proxy'] = anpProxy;
    }
    public get anpProxy(): string | undefined {
        return this['anp_proxy'];
    }
    public withHostguardProxy(hostguardProxy: string): MultiCloudClusterCreateRequestBody {
        this['hostguard_proxy'] = hostguardProxy;
        return this;
    }
    public set hostguardProxy(hostguardProxy: string  | undefined) {
        this['hostguard_proxy'] = hostguardProxy;
    }
    public get hostguardProxy(): string | undefined {
        return this['hostguard_proxy'];
    }
    public withContainerName(containerName: string): MultiCloudClusterCreateRequestBody {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withDnsPolicy(dnsPolicy: string): MultiCloudClusterCreateRequestBody {
        this['dns_policy'] = dnsPolicy;
        return this;
    }
    public set dnsPolicy(dnsPolicy: string  | undefined) {
        this['dns_policy'] = dnsPolicy;
    }
    public get dnsPolicy(): string | undefined {
        return this['dns_policy'];
    }
    public withDnsConfig(dnsConfig: string): MultiCloudClusterCreateRequestBody {
        this['dns_config'] = dnsConfig;
        return this;
    }
    public set dnsConfig(dnsConfig: string  | undefined) {
        this['dns_config'] = dnsConfig;
    }
    public get dnsConfig(): string | undefined {
        return this['dns_config'];
    }
}