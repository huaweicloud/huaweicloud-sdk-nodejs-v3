import { RestoreRequest } from './RestoreRequest';


export class RestoreOldInstanceRequest {
    private 'X-Language'?: string;
    public body?: RestoreRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): RestoreOldInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RestoreRequest): RestoreOldInstanceRequest {
        this['body'] = body;
        return this;
    }
}