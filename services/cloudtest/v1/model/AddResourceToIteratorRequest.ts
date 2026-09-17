import { AddResourceInfo } from './AddResourceInfo';


export class AddResourceToIteratorRequest {
    private 'iterator_uri'?: string;
    private 'is_async'?: boolean;
    public body?: AddResourceInfo;
    public constructor(iteratorUri?: string) { 
        this['iterator_uri'] = iteratorUri;
    }
    public withIteratorUri(iteratorUri: string): AddResourceToIteratorRequest {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withIsAsync(isAsync: boolean): AddResourceToIteratorRequest {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withBody(body: AddResourceInfo): AddResourceToIteratorRequest {
        this['body'] = body;
        return this;
    }
}