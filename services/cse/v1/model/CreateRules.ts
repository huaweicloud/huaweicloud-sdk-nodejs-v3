import { CreateMatch } from './CreateMatch';
import { CreateRoute } from './CreateRoute';


export class CreateRules {
    public precedence?: number;
    public match?: CreateMatch;
    public route?: Array<CreateRoute>;
    public constructor() { 
    }
    public withPrecedence(precedence: number): CreateRules {
        this['precedence'] = precedence;
        return this;
    }
    public withMatch(match: CreateMatch): CreateRules {
        this['match'] = match;
        return this;
    }
    public withRoute(route: Array<CreateRoute>): CreateRules {
        this['route'] = route;
        return this;
    }
}