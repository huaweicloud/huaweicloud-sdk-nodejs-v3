import { TagDto } from './TagDto';


export class CreateResourceAccountReqBody {
    public name?: string;
    private 'agency_name'?: string;
    public description?: string;
    public tags?: Array<TagDto>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateResourceAccountReqBody {
        this['name'] = name;
        return this;
    }
    public withAgencyName(agencyName: string): CreateResourceAccountReqBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withDescription(description: string): CreateResourceAccountReqBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<TagDto>): CreateResourceAccountReqBody {
        this['tags'] = tags;
        return this;
    }
}