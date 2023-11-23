import { CreateMatchHeadersHeader } from './CreateMatchHeadersHeader';


export class CreateMatchHeaders {
    private '&lt;header&gt;'?: CreateMatchHeadersHeader;
    public constructor() { 
    }
    public withLessThanHeaderGreaterThan(lessThanHeaderGreaterThan: CreateMatchHeadersHeader): CreateMatchHeaders {
        this['&lt;header&gt;'] = lessThanHeaderGreaterThan;
        return this;
    }
    public set lessThanHeaderGreaterThan(lessThanHeaderGreaterThan: CreateMatchHeadersHeader  | undefined) {
        this['&lt;header&gt;'] = lessThanHeaderGreaterThan;
    }
    public get lessThanHeaderGreaterThan(): CreateMatchHeadersHeader | undefined {
        return this['&lt;header&gt;'];
    }
}