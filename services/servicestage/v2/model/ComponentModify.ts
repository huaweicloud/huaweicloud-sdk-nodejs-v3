import { Build } from './Build';
import { SourceObject } from './SourceObject';


export class ComponentModify {
    public name?: string;
    public description?: string;
    public source?: SourceObject;
    public build?: Build;
    public constructor() { 
    }
    public withName(name: string): ComponentModify {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ComponentModify {
        this['description'] = description;
        return this;
    }
    public withSource(source: SourceObject): ComponentModify {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): ComponentModify {
        this['build'] = build;
        return this;
    }
}