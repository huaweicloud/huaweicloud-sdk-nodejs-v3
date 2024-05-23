import { PolicyTypeReqBody } from './PolicyTypeReqBody';


export class EnablePolicyTypeRequest {
    public body?: PolicyTypeReqBody;
    public constructor() { 
    }
    public withBody(body: PolicyTypeReqBody): EnablePolicyTypeRequest {
        this['body'] = body;
        return this;
    }
}