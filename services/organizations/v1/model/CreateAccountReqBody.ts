import { TagDto } from './TagDto';


export class CreateAccountReqBody {
    public name?: string;
    public email?: string;
    public phone?: string;
    private 'agency_name'?: string;
    public tags?: Array<TagDto>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateAccountReqBody {
        this['name'] = name;
        return this;
    }
    public withEmail(email: string): CreateAccountReqBody {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): CreateAccountReqBody {
        this['phone'] = phone;
        return this;
    }
    public withAgencyName(agencyName: string): CreateAccountReqBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withTags(tags: Array<TagDto>): CreateAccountReqBody {
        this['tags'] = tags;
        return this;
    }
}