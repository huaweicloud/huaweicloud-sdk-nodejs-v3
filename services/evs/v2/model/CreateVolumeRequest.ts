import { CreateVolumeRequestBody } from './CreateVolumeRequestBody';


export class CreateVolumeRequest {
    private 'X-Client-Token'?: string;
    public body?: CreateVolumeRequestBody;
    public constructor() { 
    }
    public withXClientToken(xClientToken: string): CreateVolumeRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateVolumeRequestBody): CreateVolumeRequest {
        this['body'] = body;
        return this;
    }
}