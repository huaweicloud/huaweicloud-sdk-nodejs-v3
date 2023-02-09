import { SourceWithPort } from './SourceWithPort';


export class ResourceBody {
    public sources: Array<SourceWithPort>;
    public constructor(sources?: any) { 
        this['sources'] = sources;
    }
    public withSources(sources: Array<SourceWithPort>): ResourceBody {
        this['sources'] = sources;
        return this;
    }
}