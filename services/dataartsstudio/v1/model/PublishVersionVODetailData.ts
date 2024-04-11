import { PublishVersionVO } from './PublishVersionVO';


export class PublishVersionVODetailData {
    public value?: PublishVersionVO;
    public constructor() { 
    }
    public withValue(value: PublishVersionVO): PublishVersionVODetailData {
        this['value'] = value;
        return this;
    }
}