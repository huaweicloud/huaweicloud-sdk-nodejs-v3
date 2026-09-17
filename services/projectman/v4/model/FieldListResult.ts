import { FieldEntity } from './FieldEntity';


export class FieldListResult {
    public data?: Array<FieldEntity>;
    public total?: number;
    public constructor() { 
    }
    public withData(data: Array<FieldEntity>): FieldListResult {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): FieldListResult {
        this['total'] = total;
        return this;
    }
}