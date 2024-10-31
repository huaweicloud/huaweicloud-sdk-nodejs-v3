import { Detail } from './Detail';


export class Processor {
    public type?: string;
    public detail?: Detail;
    public constructor() { 
    }
    public withType(type: string): Processor {
        this['type'] = type;
        return this;
    }
    public withDetail(detail: Detail): Processor {
        this['detail'] = detail;
        return this;
    }
}