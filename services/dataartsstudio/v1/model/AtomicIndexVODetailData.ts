import { AtomicIndexVO } from './AtomicIndexVO';


export class AtomicIndexVODetailData {
    public value?: AtomicIndexVO;
    public constructor() { 
    }
    public withValue(value: AtomicIndexVO): AtomicIndexVODetailData {
        this['value'] = value;
        return this;
    }
}