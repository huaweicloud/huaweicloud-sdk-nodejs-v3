import { MysqlProxyComputeFlavor } from './MysqlProxyComputeFlavor';


export class MysqlProxyFlavorGroups {
    private 'group_type'?: string;
    private 'proxy_flavors'?: Array<MysqlProxyComputeFlavor>;
    public constructor() { 
    }
    public withGroupType(groupType: string): MysqlProxyFlavorGroups {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withProxyFlavors(proxyFlavors: Array<MysqlProxyComputeFlavor>): MysqlProxyFlavorGroups {
        this['proxy_flavors'] = proxyFlavors;
        return this;
    }
    public set proxyFlavors(proxyFlavors: Array<MysqlProxyComputeFlavor>  | undefined) {
        this['proxy_flavors'] = proxyFlavors;
    }
    public get proxyFlavors(): Array<MysqlProxyComputeFlavor> | undefined {
        return this['proxy_flavors'];
    }
}