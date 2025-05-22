import { CreateProjectV4RequestBody } from './CreateProjectV4RequestBody';


export class CreateProjectV4Request {
    public body?: CreateProjectV4RequestBody;
    public constructor() { 
    }
    public withBody(body: CreateProjectV4RequestBody): CreateProjectV4Request {
        this['body'] = body;
        return this;
    }
}