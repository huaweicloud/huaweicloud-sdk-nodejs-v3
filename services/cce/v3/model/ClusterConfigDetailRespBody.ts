import { PackageOptions } from './PackageOptions';


export class ClusterConfigDetailRespBody {
    private 'kube-apiserver'?: Array<PackageOptions>;
    public constructor() { 
    }
    public withKubeApiserver(kubeApiserver: Array<PackageOptions>): ClusterConfigDetailRespBody {
        this['kube-apiserver'] = kubeApiserver;
        return this;
    }
    public set kubeApiserver(kubeApiserver: Array<PackageOptions>  | undefined) {
        this['kube-apiserver'] = kubeApiserver;
    }
    public get kubeApiserver(): Array<PackageOptions> | undefined {
        return this['kube-apiserver'];
    }
}
