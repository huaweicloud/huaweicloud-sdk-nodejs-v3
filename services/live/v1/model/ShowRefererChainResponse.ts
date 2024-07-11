
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRefererChainResponse extends SdkResponse {
    public domain?: string;
    private 'guard_switch'?: ShowRefererChainResponseGuardSwitchEnum | string;
    private 'referer_config_empty'?: ShowRefererChainResponseRefererConfigEmptyEnum | string;
    private 'referer_white_list'?: ShowRefererChainResponseRefererWhiteListEnum | string;
    private 'referer_auth_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): ShowRefererChainResponse {
        this['domain'] = domain;
        return this;
    }
    public withGuardSwitch(guardSwitch: ShowRefererChainResponseGuardSwitchEnum | string): ShowRefererChainResponse {
        this['guard_switch'] = guardSwitch;
        return this;
    }
    public set guardSwitch(guardSwitch: ShowRefererChainResponseGuardSwitchEnum | string  | undefined) {
        this['guard_switch'] = guardSwitch;
    }
    public get guardSwitch(): ShowRefererChainResponseGuardSwitchEnum | string | undefined {
        return this['guard_switch'];
    }
    public withRefererConfigEmpty(refererConfigEmpty: ShowRefererChainResponseRefererConfigEmptyEnum | string): ShowRefererChainResponse {
        this['referer_config_empty'] = refererConfigEmpty;
        return this;
    }
    public set refererConfigEmpty(refererConfigEmpty: ShowRefererChainResponseRefererConfigEmptyEnum | string  | undefined) {
        this['referer_config_empty'] = refererConfigEmpty;
    }
    public get refererConfigEmpty(): ShowRefererChainResponseRefererConfigEmptyEnum | string | undefined {
        return this['referer_config_empty'];
    }
    public withRefererWhiteList(refererWhiteList: ShowRefererChainResponseRefererWhiteListEnum | string): ShowRefererChainResponse {
        this['referer_white_list'] = refererWhiteList;
        return this;
    }
    public set refererWhiteList(refererWhiteList: ShowRefererChainResponseRefererWhiteListEnum | string  | undefined) {
        this['referer_white_list'] = refererWhiteList;
    }
    public get refererWhiteList(): ShowRefererChainResponseRefererWhiteListEnum | string | undefined {
        return this['referer_white_list'];
    }
    public withRefererAuthList(refererAuthList: Array<string>): ShowRefererChainResponse {
        this['referer_auth_list'] = refererAuthList;
        return this;
    }
    public set refererAuthList(refererAuthList: Array<string>  | undefined) {
        this['referer_auth_list'] = refererAuthList;
    }
    public get refererAuthList(): Array<string> | undefined {
        return this['referer_auth_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRefererChainResponseGuardSwitchEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowRefererChainResponseRefererConfigEmptyEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowRefererChainResponseRefererWhiteListEnum {
    TRUE = 'true',
    FALSE = 'false'
}
