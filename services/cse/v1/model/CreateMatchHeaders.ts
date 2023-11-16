import { CreateMatchHeadersAaaa } from './CreateMatchHeadersAaaa';


export class CreateMatchHeaders {
    public aaaa?: CreateMatchHeadersAaaa;
    public constructor() { 
    }
    public withAaaa(aaaa: CreateMatchHeadersAaaa): CreateMatchHeaders {
        this['aaaa'] = aaaa;
        return this;
    }
}