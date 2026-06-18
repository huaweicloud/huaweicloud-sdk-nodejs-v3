import { BatchResizeFlavorRequestBody } from './BatchResizeFlavorRequestBody';


export class BatchResizeFlavorRequest {
    private 'X-Language'?: string;
    public body?: BatchResizeFlavorRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchResizeFlavorRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchResizeFlavorRequestBody): BatchResizeFlavorRequest {
        this['body'] = body;
        return this;
    }
}