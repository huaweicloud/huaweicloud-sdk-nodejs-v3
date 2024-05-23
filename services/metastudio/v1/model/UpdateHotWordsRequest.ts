import { UpdateHotWordsReq } from './UpdateHotWordsReq';


export class UpdateHotWordsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'hot_words_id'?: string;
    public body?: UpdateHotWordsReq;
    public constructor(hotWordsId?: string) { 
        this['hot_words_id'] = hotWordsId;
    }
    public withAuthorization(authorization: string): UpdateHotWordsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateHotWordsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateHotWordsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): UpdateHotWordsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withHotWordsId(hotWordsId: string): UpdateHotWordsRequest {
        this['hot_words_id'] = hotWordsId;
        return this;
    }
    public set hotWordsId(hotWordsId: string  | undefined) {
        this['hot_words_id'] = hotWordsId;
    }
    public get hotWordsId(): string | undefined {
        return this['hot_words_id'];
    }
    public withBody(body: UpdateHotWordsReq): UpdateHotWordsRequest {
        this['body'] = body;
        return this;
    }
}