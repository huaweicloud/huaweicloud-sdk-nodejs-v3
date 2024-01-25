
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyPluginResponse extends SdkResponse {
    public imagePullPolicy?: ModifyPluginResponseImagePullPolicyEnum | string;
    public imagePullSecret?: string;
    public phase?: ModifyPluginResponsePhaseEnum | string;
    public pluginConfig?: object;
    public pluginName?: string;
    public priority?: number;
    public sha256?: string;
    public url?: string;
    public verificationKey?: string;
    public constructor() { 
        super();
    }
    public withImagePullPolicy(imagePullPolicy: ModifyPluginResponseImagePullPolicyEnum | string): ModifyPluginResponse {
        this['imagePullPolicy'] = imagePullPolicy;
        return this;
    }
    public withImagePullSecret(imagePullSecret: string): ModifyPluginResponse {
        this['imagePullSecret'] = imagePullSecret;
        return this;
    }
    public withPhase(phase: ModifyPluginResponsePhaseEnum | string): ModifyPluginResponse {
        this['phase'] = phase;
        return this;
    }
    public withPluginConfig(pluginConfig: object): ModifyPluginResponse {
        this['pluginConfig'] = pluginConfig;
        return this;
    }
    public withPluginName(pluginName: string): ModifyPluginResponse {
        this['pluginName'] = pluginName;
        return this;
    }
    public withPriority(priority: number): ModifyPluginResponse {
        this['priority'] = priority;
        return this;
    }
    public withSha256(sha256: string): ModifyPluginResponse {
        this['sha256'] = sha256;
        return this;
    }
    public withUrl(url: string): ModifyPluginResponse {
        this['url'] = url;
        return this;
    }
    public withVerificationKey(verificationKey: string): ModifyPluginResponse {
        this['verificationKey'] = verificationKey;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyPluginResponseImagePullPolicyEnum {
    UNSPECIFIED_POLICY = 'UNSPECIFIED_POLICY',
    IFNOTPRESENT = 'IfNotPresent',
    ALWAYS = 'Always'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyPluginResponsePhaseEnum {
    UNSPECIFIED_PHASE = 'UNSPECIFIED_PHASE',
    AUTHN = 'AUTHN',
    AUTHZ = 'AUTHZ',
    STATS = 'STATS'
}
