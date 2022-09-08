import { BgpOptions } from './BgpOptions';
import { Tag } from './Tag';


export class RouteTable {
    public id?: string;
    public name: string;
    public description?: string;
    private 'is_default_association': boolean | undefined;
    private 'is_default_propagation': boolean | undefined;
    public state: string;
    public tags?: Array<Tag>;
    private 'bgp_options'?: BgpOptions | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at'?: Date | undefined;
    public constructor(name?: any, isDefaultAssociation?: any, isDefaultPropagation?: any, state?: any, createdAt?: any) { 
        this['name'] = name;
        this['is_default_association'] = isDefaultAssociation;
        this['is_default_propagation'] = isDefaultPropagation;
        this['state'] = state;
        this['created_at'] = createdAt;
    }
    public withId(id: string): RouteTable {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RouteTable {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RouteTable {
        this['description'] = description;
        return this;
    }
    public withIsDefaultAssociation(isDefaultAssociation: boolean): RouteTable {
        this['is_default_association'] = isDefaultAssociation;
        return this;
    }
    public set isDefaultAssociation(isDefaultAssociation: boolean | undefined) {
        this['is_default_association'] = isDefaultAssociation;
    }
    public get isDefaultAssociation() {
        return this['is_default_association'];
    }
    public withIsDefaultPropagation(isDefaultPropagation: boolean): RouteTable {
        this['is_default_propagation'] = isDefaultPropagation;
        return this;
    }
    public set isDefaultPropagation(isDefaultPropagation: boolean | undefined) {
        this['is_default_propagation'] = isDefaultPropagation;
    }
    public get isDefaultPropagation() {
        return this['is_default_propagation'];
    }
    public withState(state: string): RouteTable {
        this['state'] = state;
        return this;
    }
    public withTags(tags: Array<Tag>): RouteTable {
        this['tags'] = tags;
        return this;
    }
    public withBgpOptions(bgpOptions: BgpOptions): RouteTable {
        this['bgp_options'] = bgpOptions;
        return this;
    }
    public set bgpOptions(bgpOptions: BgpOptions | undefined) {
        this['bgp_options'] = bgpOptions;
    }
    public get bgpOptions() {
        return this['bgp_options'];
    }
    public withCreatedAt(createdAt: Date): RouteTable {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): RouteTable {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}