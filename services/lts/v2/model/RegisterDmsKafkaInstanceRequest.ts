import { RegisterDmsKafkaInstanceRequestBody } from './RegisterDmsKafkaInstanceRequestBody';


export class RegisterDmsKafkaInstanceRequest {
    private 'Content-Type'?: string;
    public body?: RegisterDmsKafkaInstanceRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): RegisterDmsKafkaInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: RegisterDmsKafkaInstanceRequestBody): RegisterDmsKafkaInstanceRequest {
        this['body'] = body;
        return this;
    }
}