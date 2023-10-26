import { EmbeddedDatabaseWatermark } from './EmbeddedDatabaseWatermark';


export class CreateDatabaseWaterMarkRequest {
    public body?: EmbeddedDatabaseWatermark;
    public constructor() { 
    }
    public withBody(body: EmbeddedDatabaseWatermark): CreateDatabaseWaterMarkRequest {
        this['body'] = body;
        return this;
    }
}