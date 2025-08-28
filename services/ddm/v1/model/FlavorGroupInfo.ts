import { Flavor } from './Flavor';


export class FlavorGroupInfo {
    private 'group_type'?: string;
    public flavors?: Array<Flavor>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor(groupType?: string, flavors?: Array<Flavor>, offset?: number, limit?: number, total?: number) { 
        this['group_type'] = groupType;
        this['flavors'] = flavors;
        this['offset'] = offset;
        this['limit'] = limit;
        this['total'] = total;
    }
    public withGroupType(groupType: string): FlavorGroupInfo {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withFlavors(flavors: Array<Flavor>): FlavorGroupInfo {
        this['flavors'] = flavors;
        return this;
    }
    public withOffset(offset: number): FlavorGroupInfo {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): FlavorGroupInfo {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): FlavorGroupInfo {
        this['total'] = total;
        return this;
    }
}