import { CreateAnalyzerReqBody } from './CreateAnalyzerReqBody';


export class CreateAnalyzerRequest {
    public body?: CreateAnalyzerReqBody;
    public constructor() { 
    }
    public withBody(body: CreateAnalyzerReqBody): CreateAnalyzerRequest {
        this['body'] = body;
        return this;
    }
}