import { CreateTrafficMirrorFilterRuleRequestBody } from './CreateTrafficMirrorFilterRuleRequestBody';


export class CreateTrafficMirrorFilterRuleRequest {
    public body?: CreateTrafficMirrorFilterRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTrafficMirrorFilterRuleRequestBody): CreateTrafficMirrorFilterRuleRequest {
        this['body'] = body;
        return this;
    }
}