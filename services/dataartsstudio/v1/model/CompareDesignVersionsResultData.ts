import { PublishVersionVO } from './PublishVersionVO';


export class CompareDesignVersionsResultData {
    public value?: PublishVersionVO;
    public constructor() { 
    }
    public withValue(value: PublishVersionVO): CompareDesignVersionsResultData {
        this['value'] = value;
        return this;
    }
}