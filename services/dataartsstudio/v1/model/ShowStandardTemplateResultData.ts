import { ShowStandardTemplateResultDataValue } from './ShowStandardTemplateResultDataValue';


export class ShowStandardTemplateResultData {
    public value?: ShowStandardTemplateResultDataValue;
    public constructor() { 
    }
    public withValue(value: ShowStandardTemplateResultDataValue): ShowStandardTemplateResultData {
        this['value'] = value;
        return this;
    }
}