import { PostMigProjectBody } from './PostMigProjectBody';


export class CreateMigprojectRequest {
    public body?: PostMigProjectBody;
    public constructor() { 
    }
    public withBody(body: PostMigProjectBody): CreateMigprojectRequest {
        this['body'] = body;
        return this;
    }
}