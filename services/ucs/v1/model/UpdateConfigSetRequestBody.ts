import { KustomizationSpec } from './KustomizationSpec';


export class UpdateConfigSetRequestBody {
    public name?: string;
    public namespace?: string;
    public helmReleaseSpec?: object;
    public kustomizationSpec?: KustomizationSpec;
    public constructor() { 
    }
    public withName(name: string): UpdateConfigSetRequestBody {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): UpdateConfigSetRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withHelmReleaseSpec(helmReleaseSpec: object): UpdateConfigSetRequestBody {
        this['helmReleaseSpec'] = helmReleaseSpec;
        return this;
    }
    public withKustomizationSpec(kustomizationSpec: KustomizationSpec): UpdateConfigSetRequestBody {
        this['kustomizationSpec'] = kustomizationSpec;
        return this;
    }
}