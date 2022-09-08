import { BgpOptions } from './BgpOptions';


export class UpdateRouteTable {
    public name?: string;
    public description?: string;
    private 'bgp_options'?: BgpOptions | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateRouteTable {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRouteTable {
        this['description'] = description;
        return this;
    }
    public withBgpOptions(bgpOptions: BgpOptions): UpdateRouteTable {
        this['bgp_options'] = bgpOptions;
        return this;
    }
    public set bgpOptions(bgpOptions: BgpOptions | undefined) {
        this['bgp_options'] = bgpOptions;
    }
    public get bgpOptions() {
        return this['bgp_options'];
    }
}