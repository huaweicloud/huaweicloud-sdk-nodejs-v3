import { ProxyFlavor } from './ProxyFlavor';


export class ProxyFlavorGroup {
    private 'group_type'?: string;
    private 'proxy_flavors'?: Array<ProxyFlavor>;
    public constructor() { 
    }
    public withGroupType(groupType: string): ProxyFlavorGroup {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withProxyFlavors(proxyFlavors: Array<ProxyFlavor>): ProxyFlavorGroup {
        this['proxy_flavors'] = proxyFlavors;
        return this;
    }
    public set proxyFlavors(proxyFlavors: Array<ProxyFlavor>  | undefined) {
        this['proxy_flavors'] = proxyFlavors;
    }
    public get proxyFlavors(): Array<ProxyFlavor> | undefined {
        return this['proxy_flavors'];
    }
}