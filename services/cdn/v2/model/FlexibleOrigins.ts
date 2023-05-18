import { BackSources } from './BackSources';


export class FlexibleOrigins {
    private 'match_type': string | undefined;
    private 'match_pattern': string | undefined;
    public priority: number;
    private 'back_sources'?: Array<BackSources> | undefined;
    public constructor(matchType?: any, matchPattern?: any, priority?: any) { 
        this['match_type'] = matchType;
        this['match_pattern'] = matchPattern;
        this['priority'] = priority;
    }
    public withMatchType(matchType: string): FlexibleOrigins {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType() {
        return this['match_type'];
    }
    public withMatchPattern(matchPattern: string): FlexibleOrigins {
        this['match_pattern'] = matchPattern;
        return this;
    }
    public set matchPattern(matchPattern: string | undefined) {
        this['match_pattern'] = matchPattern;
    }
    public get matchPattern() {
        return this['match_pattern'];
    }
    public withPriority(priority: number): FlexibleOrigins {
        this['priority'] = priority;
        return this;
    }
    public withBackSources(backSources: Array<BackSources>): FlexibleOrigins {
        this['back_sources'] = backSources;
        return this;
    }
    public set backSources(backSources: Array<BackSources> | undefined) {
        this['back_sources'] = backSources;
    }
    public get backSources() {
        return this['back_sources'];
    }
}