import { CreatePoolRequestBody } from './CreatePoolRequestBody';


export class CreatePoolRequest {
    private 'X-ModelArts-User-ID'?: string;
    public body?: CreatePoolRequestBody;
    public constructor() { 
    }
    public withXModelArtsUserID(xModelArtsUserID: string): CreatePoolRequest {
        this['X-ModelArts-User-ID'] = xModelArtsUserID;
        return this;
    }
    public set xModelArtsUserID(xModelArtsUserID: string  | undefined) {
        this['X-ModelArts-User-ID'] = xModelArtsUserID;
    }
    public get xModelArtsUserID(): string | undefined {
        return this['X-ModelArts-User-ID'];
    }
    public withBody(body: CreatePoolRequestBody): CreatePoolRequest {
        this['body'] = body;
        return this;
    }
}