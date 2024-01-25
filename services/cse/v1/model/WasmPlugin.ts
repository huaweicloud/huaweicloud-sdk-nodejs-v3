

export class WasmPlugin {
    public imagePullPolicy?: WasmPluginImagePullPolicyEnum | string;
    public imagePullSecret?: string;
    public phase?: WasmPluginPhaseEnum | string;
    public pluginConfig?: object;
    public pluginName?: string;
    public priority?: number;
    public sha256?: string;
    public url?: string;
    public verificationKey?: string;
    public constructor() { 
    }
    public withImagePullPolicy(imagePullPolicy: WasmPluginImagePullPolicyEnum | string): WasmPlugin {
        this['imagePullPolicy'] = imagePullPolicy;
        return this;
    }
    public withImagePullSecret(imagePullSecret: string): WasmPlugin {
        this['imagePullSecret'] = imagePullSecret;
        return this;
    }
    public withPhase(phase: WasmPluginPhaseEnum | string): WasmPlugin {
        this['phase'] = phase;
        return this;
    }
    public withPluginConfig(pluginConfig: object): WasmPlugin {
        this['pluginConfig'] = pluginConfig;
        return this;
    }
    public withPluginName(pluginName: string): WasmPlugin {
        this['pluginName'] = pluginName;
        return this;
    }
    public withPriority(priority: number): WasmPlugin {
        this['priority'] = priority;
        return this;
    }
    public withSha256(sha256: string): WasmPlugin {
        this['sha256'] = sha256;
        return this;
    }
    public withUrl(url: string): WasmPlugin {
        this['url'] = url;
        return this;
    }
    public withVerificationKey(verificationKey: string): WasmPlugin {
        this['verificationKey'] = verificationKey;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WasmPluginImagePullPolicyEnum {
    UNSPECIFIED_POLICY = 'UNSPECIFIED_POLICY',
    IFNOTPRESENT = 'IfNotPresent',
    ALWAYS = 'Always'
}
/**
    * @export
    * @enum {string}
    */
export enum WasmPluginPhaseEnum {
    UNSPECIFIED_PHASE = 'UNSPECIFIED_PHASE',
    AUTHN = 'AUTHN',
    AUTHZ = 'AUTHZ',
    STATS = 'STATS'
}
