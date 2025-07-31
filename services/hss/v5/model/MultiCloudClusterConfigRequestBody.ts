

export class MultiCloudClusterConfigRequestBody {
    private 'kube_config'?: string;
    public constructor(kubeConfig?: string) { 
        this['kube_config'] = kubeConfig;
    }
    public withKubeConfig(kubeConfig: string): MultiCloudClusterConfigRequestBody {
        this['kube_config'] = kubeConfig;
        return this;
    }
    public set kubeConfig(kubeConfig: string  | undefined) {
        this['kube_config'] = kubeConfig;
    }
    public get kubeConfig(): string | undefined {
        return this['kube_config'];
    }
}