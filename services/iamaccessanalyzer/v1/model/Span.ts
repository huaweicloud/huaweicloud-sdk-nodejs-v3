import { Position } from './Position';


export class Span {
    public start?: Position;
    public end?: Position;
    public constructor(start?: Position, end?: Position) { 
        this['start'] = start;
        this['end'] = end;
    }
    public withStart(start: Position): Span {
        this['start'] = start;
        return this;
    }
    public withEnd(end: Position): Span {
        this['end'] = end;
        return this;
    }
}