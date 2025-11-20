import { PremiumWafAgencyRequest } from './PremiumWafAgencyRequest';


export class CreateAgencyRequest {
    private 'Content-Type'?: string;
    public body?: PremiumWafAgencyRequest;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAgencyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: PremiumWafAgencyRequest): CreateAgencyRequest {
        this['body'] = body;
        return this;
    }
}