import { QuerySampleParam } from './QuerySampleParam';


export class ListSampleRequest {
    private 'fill_value'?: string;
    public body?: QuerySampleParam;
    public constructor() { 
    }
    public withFillValue(fillValue: string): ListSampleRequest {
        this['fill_value'] = fillValue;
        return this;
    }
    public set fillValue(fillValue: string  | undefined) {
        this['fill_value'] = fillValue;
    }
    public get fillValue(): string | undefined {
        return this['fill_value'];
    }
    public withBody(body: QuerySampleParam): ListSampleRequest {
        this['body'] = body;
        return this;
    }
}