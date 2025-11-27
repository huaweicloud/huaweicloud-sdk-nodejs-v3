import { ObjectMeta } from './ObjectMeta';
import { OverridePolicy } from './OverridePolicy';
import { PropagationPolicy } from './PropagationPolicy';
import { ResourceBinding } from './ResourceBinding';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProxyUnitedWorkloadResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public template?: object;
    public propagationPolicy?: PropagationPolicy;
    public overridePolicy?: OverridePolicy;
    public resourceBinding?: ResourceBinding;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowProxyUnitedWorkloadResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowProxyUnitedWorkloadResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowProxyUnitedWorkloadResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withTemplate(template: object): ShowProxyUnitedWorkloadResponse {
        this['template'] = template;
        return this;
    }
    public withPropagationPolicy(propagationPolicy: PropagationPolicy): ShowProxyUnitedWorkloadResponse {
        this['propagationPolicy'] = propagationPolicy;
        return this;
    }
    public withOverridePolicy(overridePolicy: OverridePolicy): ShowProxyUnitedWorkloadResponse {
        this['overridePolicy'] = overridePolicy;
        return this;
    }
    public withResourceBinding(resourceBinding: ResourceBinding): ShowProxyUnitedWorkloadResponse {
        this['resourceBinding'] = resourceBinding;
        return this;
    }
}