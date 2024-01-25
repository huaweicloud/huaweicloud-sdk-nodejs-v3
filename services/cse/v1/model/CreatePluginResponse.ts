
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePluginResponse extends SdkResponse {
    public imagePullPolicy?: CreatePluginResponseImagePullPolicyEnum | string;
    public imagePullSecret?: string;
    public phase?: CreatePluginResponsePhaseEnum | string;
    public pluginConfig?: object;
    public pluginName?: string;
    public priority?: number;
    public sha256?: string;
    public url?: string;
    public verificationKey?: string;
    public constructor() { 
        super();
    }
    public withImagePullPolicy(imagePullPolicy: CreatePluginResponseImagePullPolicyEnum | string): CreatePluginResponse {
        this['imagePullPolicy'] = imagePullPolicy;
        return this;
    }
    public withImagePullSecret(imagePullSecret: string): CreatePluginResponse {
        this['imagePullSecret'] = imagePullSecret;
        return this;
    }
    public withPhase(phase: CreatePluginResponsePhaseEnum | string): CreatePluginResponse {
        this['phase'] = phase;
        return this;
    }
    public withPluginConfig(pluginConfig: object): CreatePluginResponse {
        this['pluginConfig'] = pluginConfig;
        return this;
    }
    public withPluginName(pluginName: string): CreatePluginResponse {
        this['pluginName'] = pluginName;
        return this;
    }
    public withPriority(priority: number): CreatePluginResponse {
        this['priority'] = priority;
        return this;
    }
    public withSha256(sha256: string): CreatePluginResponse {
        this['sha256'] = sha256;
        return this;
    }
    public withUrl(url: string): CreatePluginResponse {
        this['url'] = url;
        return this;
    }
    public withVerificationKey(verificationKey: string): CreatePluginResponse {
        this['verificationKey'] = verificationKey;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePluginResponseImagePullPolicyEnum {
    UNSPECIFIED_POLICY = 'UNSPECIFIED_POLICY',
    IFNOTPRESENT = 'IfNotPresent',
    ALWAYS = 'Always'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePluginResponsePhaseEnum {
    UNSPECIFIED_PHASE = 'UNSPECIFIED_PHASE',
    AUTHN = 'AUTHN',
    AUTHZ = 'AUTHZ',
    STATS = 'STATS'
}
