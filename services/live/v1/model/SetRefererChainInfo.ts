

export class SetRefererChainInfo {
    public domain?: string;
    private 'guard_switch'?: SetRefererChainInfoGuardSwitchEnum | string;
    private 'referer_config_empty'?: SetRefererChainInfoRefererConfigEmptyEnum | string;
    private 'referer_white_list'?: SetRefererChainInfoRefererWhiteListEnum | string;
    private 'referer_auth_list'?: Array<string>;
    public constructor(domain?: string, guardSwitch?: string) { 
        this['domain'] = domain;
        this['guard_switch'] = guardSwitch;
    }
    public withDomain(domain: string): SetRefererChainInfo {
        this['domain'] = domain;
        return this;
    }
    public withGuardSwitch(guardSwitch: SetRefererChainInfoGuardSwitchEnum | string): SetRefererChainInfo {
        this['guard_switch'] = guardSwitch;
        return this;
    }
    public set guardSwitch(guardSwitch: SetRefererChainInfoGuardSwitchEnum | string  | undefined) {
        this['guard_switch'] = guardSwitch;
    }
    public get guardSwitch(): SetRefererChainInfoGuardSwitchEnum | string | undefined {
        return this['guard_switch'];
    }
    public withRefererConfigEmpty(refererConfigEmpty: SetRefererChainInfoRefererConfigEmptyEnum | string): SetRefererChainInfo {
        this['referer_config_empty'] = refererConfigEmpty;
        return this;
    }
    public set refererConfigEmpty(refererConfigEmpty: SetRefererChainInfoRefererConfigEmptyEnum | string  | undefined) {
        this['referer_config_empty'] = refererConfigEmpty;
    }
    public get refererConfigEmpty(): SetRefererChainInfoRefererConfigEmptyEnum | string | undefined {
        return this['referer_config_empty'];
    }
    public withRefererWhiteList(refererWhiteList: SetRefererChainInfoRefererWhiteListEnum | string): SetRefererChainInfo {
        this['referer_white_list'] = refererWhiteList;
        return this;
    }
    public set refererWhiteList(refererWhiteList: SetRefererChainInfoRefererWhiteListEnum | string  | undefined) {
        this['referer_white_list'] = refererWhiteList;
    }
    public get refererWhiteList(): SetRefererChainInfoRefererWhiteListEnum | string | undefined {
        return this['referer_white_list'];
    }
    public withRefererAuthList(refererAuthList: Array<string>): SetRefererChainInfo {
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
export enum SetRefererChainInfoGuardSwitchEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum SetRefererChainInfoRefererConfigEmptyEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum SetRefererChainInfoRefererWhiteListEnum {
    TRUE = 'true',
    FALSE = 'false'
}
