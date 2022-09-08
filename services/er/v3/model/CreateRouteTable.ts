import { BgpOptions } from './BgpOptions';
import { Tag } from './Tag';


export class CreateRouteTable {
    public name: string;
    public description?: string;
    private 'bgp_options'?: BgpOptions | undefined;
    public tags?: Array<Tag>;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CreateRouteTable {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateRouteTable {
        this['description'] = description;
        return this;
    }
    public withBgpOptions(bgpOptions: BgpOptions): CreateRouteTable {
        this['bgp_options'] = bgpOptions;
        return this;
    }
    public set bgpOptions(bgpOptions: BgpOptions | undefined) {
        this['bgp_options'] = bgpOptions;
    }
    public get bgpOptions() {
        return this['bgp_options'];
    }
    public withTags(tags: Array<Tag>): CreateRouteTable {
        this['tags'] = tags;
        return this;
    }
}