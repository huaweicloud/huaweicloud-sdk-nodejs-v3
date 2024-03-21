import { Array&lt;PackageOptions&gt; } from './Array&lt;PackageOptions&gt;';
import { PackageOptions } from './PackageOptions';


export class ShowNodePoolConfigurationDetailsRespBody {
    public kubelet?: Array<PackageOptions>;
    public constructor() { 
    }
    public withKubelet(kubelet: Array<PackageOptions>): ShowNodePoolConfigurationDetailsRespBody {
        this['kubelet'] = kubelet;
        return this;
    }
}