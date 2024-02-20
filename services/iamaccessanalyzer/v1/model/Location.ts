import { PathElement } from './PathElement';
import { Span } from './Span';


export class Location {
    public path?: Array<PathElement>;
    public span?: Span;
    public constructor(path?: Array<PathElement>, span?: Span) { 
        this['path'] = path;
        this['span'] = span;
    }
    public withPath(path: Array<PathElement>): Location {
        this['path'] = path;
        return this;
    }
    public withSpan(span: Span): Location {
        this['span'] = span;
        return this;
    }
}