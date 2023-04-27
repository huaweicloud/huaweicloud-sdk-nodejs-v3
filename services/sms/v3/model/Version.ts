import { Link } from './Link';


export class Version {
    public id?: string;
    public links?: Array<Link>;
    public status?: string;
    public updated?: string;
    public constructor() { 
    }
    public withId(id: string): Version {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): Version {
        this['links'] = links;
        return this;
    }
    public withStatus(status: string): Version {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): Version {
        this['updated'] = updated;
        return this;
    }
}