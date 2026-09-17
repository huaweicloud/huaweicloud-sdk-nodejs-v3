import { FieldVO } from './FieldVO';


export class ListCacheDatasResposeResult {
    public fields?: Array<FieldVO>;
    public visibleFields?: Array<FieldVO>;
    public constructor() { 
    }
    public withFields(fields: Array<FieldVO>): ListCacheDatasResposeResult {
        this['fields'] = fields;
        return this;
    }
    public withVisibleFields(visibleFields: Array<FieldVO>): ListCacheDatasResposeResult {
        this['visibleFields'] = visibleFields;
        return this;
    }
}