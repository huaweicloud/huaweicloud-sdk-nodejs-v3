import { Match } from './Match';


export class ResqEpResouce {
    public projects?: Array<string>;
    private 'resource_types': Array<string> | undefined;
    public offset?: number;
    public limit?: number;
    public matches?: Array<Match>;
    public constructor(resourceTypes?: any) { 
        this['resource_types'] = resourceTypes;
    }
    public withProjects(projects: Array<string>): ResqEpResouce {
        this['projects'] = projects;
        return this;
    }
    public withResourceTypes(resourceTypes: Array<string>): ResqEpResouce {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string> | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes() {
        return this['resource_types'];
    }
    public withOffset(offset: number): ResqEpResouce {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ResqEpResouce {
        this['limit'] = limit;
        return this;
    }
    public withMatches(matches: Array<Match>): ResqEpResouce {
        this['matches'] = matches;
        return this;
    }
}