
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSinglePluginResponse extends SdkResponse {
    public imagePullPolicy?: ShowSinglePluginResponseImagePullPolicyEnum | string;
    public imagePullSecret?: string;
    public phase?: ShowSinglePluginResponsePhaseEnum | string;
    public pluginConfig?: object;
    public pluginName?: string;
    public priority?: number;
    public sha256?: string;
    public url?: string;
    public verificationKey?: string;
    public constructor() { 
        super();
    }
    public withImagePullPolicy(imagePullPolicy: ShowSinglePluginResponseImagePullPolicyEnum | string): ShowSinglePluginResponse {
        this['imagePullPolicy'] = imagePullPolicy;
        return this;
    }
    public withImagePullSecret(imagePullSecret: string): ShowSinglePluginResponse {
        this['imagePullSecret'] = imagePullSecret;
        return this;
    }
    public withPhase(phase: ShowSinglePluginResponsePhaseEnum | string): ShowSinglePluginResponse {
        this['phase'] = phase;
        return this;
    }
    public withPluginConfig(pluginConfig: object): ShowSinglePluginResponse {
        this['pluginConfig'] = pluginConfig;
        return this;
    }
    public withPluginName(pluginName: string): ShowSinglePluginResponse {
        this['pluginName'] = pluginName;
        return this;
    }
    public withPriority(priority: number): ShowSinglePluginResponse {
        this['priority'] = priority;
        return this;
    }
    public withSha256(sha256: string): ShowSinglePluginResponse {
        this['sha256'] = sha256;
        return this;
    }
    public withUrl(url: string): ShowSinglePluginResponse {
        this['url'] = url;
        return this;
    }
    public withVerificationKey(verificationKey: string): ShowSinglePluginResponse {
        this['verificationKey'] = verificationKey;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSinglePluginResponseImagePullPolicyEnum {
    UNSPECIFIED_POLICY = 'UNSPECIFIED_POLICY',
    IFNOTPRESENT = 'IfNotPresent',
    ALWAYS = 'Always'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSinglePluginResponsePhaseEnum {
    UNSPECIFIED_PHASE = 'UNSPECIFIED_PHASE',
    AUTHN = 'AUTHN',
    AUTHZ = 'AUTHZ',
    STATS = 'STATS'
}
